import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const normalizeIndianPhone = (rawPhone: string): string => {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  if (digits.length > 10) {
    return digits.slice(-10);
  }
  return digits;
};

async function handleLeadSubmission(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      name,
      fullName,
      email,
      phone,
      phoneNumber,
      city,
      destination,
      from_date,
      travelDate,
      duration,
      packagePreference,
      adults,
      children,
      budget,
    } = body;

    const rawName = typeof name === 'string' && name.trim() ? name.trim() : (typeof fullName === 'string' ? fullName.trim() : '');
    const rawEmail = typeof email === 'string' ? email.trim() : '';
    const rawPhoneStr = typeof phone === 'string' ? phone : (typeof phoneNumber === 'string' ? phoneNumber : (phone ? String(phone) : ''));
    const cleanPhone = normalizeIndianPhone(rawPhoneStr);
    const rawCity = typeof city === 'string' ? city.trim() : '';
    const rawDestination = typeof destination === 'string' && destination.trim() ? destination.trim() : 'Kerala';

    const rawFromDate = typeof from_date === 'string' && from_date.trim() ? from_date.trim() : (typeof travelDate === 'string' ? travelDate.trim() : '');
    const rawDuration = typeof duration === 'string' && duration.trim() ? duration.trim() : (typeof packagePreference === 'string' ? packagePreference.trim() : '');
    
    const adultsNum = typeof adults === 'number' ? adults : Number(adults);
    const childrenNum = typeof children === 'number' ? children : (children !== undefined && children !== '' && children !== null ? Number(children) : 0);
    const rawBudget = typeof budget === 'string' ? budget.trim() : '';

    const validationErrors: Record<string, string> = {};

    if (!rawName || rawName.length < 2 || rawName.length > 100) {
      validationErrors.name = 'Please provide a valid name (2-100 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rawEmail || !emailRegex.test(rawEmail) || rawEmail.length > 150) {
      validationErrors.email = 'Please provide a valid email address.';
    }

    if (!cleanPhone || cleanPhone.length !== 10) {
      validationErrors.phone = 'Please provide a valid 10-digit mobile phone number.';
    }

    if (!rawCity || rawCity.length < 2 || rawCity.length > 100) {
      validationErrors.city = 'Please provide your departure city.';
    }

    if (!rawDestination || rawDestination.length < 2 || rawDestination.length > 100) {
      validationErrors.destination = 'Please specify a destination or tour package.';
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!rawFromDate || !dateRegex.test(rawFromDate)) {
      validationErrors.from_date = 'Please provide a valid travel date (YYYY-MM-DD).';
    }

    if (!rawDuration) {
      validationErrors.duration = 'Please specify a tour duration.';
    }

    if (isNaN(adultsNum) || adultsNum < 2) {
      validationErrors.adults = 'Number of adults must be at least 2.';
    }

    if (isNaN(childrenNum) || childrenNum < 0) {
      validationErrors.children = 'Number of children cannot be negative.';
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: 'validation_failed',
          message: 'Please complete all required fields.',
          fields: validationErrors,
        },
        { status: 400 }
      );
    }

    const crmPayload = {
      name: rawName,
      email: rawEmail,
      phone: cleanPhone,
      city: rawCity,
      destination: rawDestination,
      from_date: rawFromDate,
      duration: rawDuration,
      adults: adultsNum,
      children: childrenNum,
      budget: rawBudget,
    };

    const crmUrl =
      process.env.CRM_LEAD_API_URL ||
      'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php';
    const crmApiKey = process.env.CRM_LEAD_API_KEY || '';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    let crmResponse: Response;
    try {
      crmResponse = await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': crmApiKey,
        },
        body: JSON.stringify(crmPayload),
        signal: controller.signal,
      });
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);
      console.error('[CRM API Error] Fetch network failure to URL:', crmUrl, fetchErr);
      return NextResponse.json(
        {
          ok: false,
          error: 'network_error',
          message: "Unable to submit enquiry to CRM right now. Please try again or contact us via WhatsApp.",
        },
        { status: 502 }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    const crmStatus = crmResponse.status;
    let crmResult: any = null;

    try {
      crmResult = await crmResponse.json();
    } catch (parseErr) {
      console.error('[CRM API Error] Failed to parse JSON response. Status:', crmStatus, parseErr);
      crmResult = null;
    }

    if (crmStatus === 200 && crmResult && crmResult.ok === true) {
      // Send email alert via Google Workspace / Gmail SMTP Relay (non-blocking best-effort)
      try {
        const smtpSender = process.env.SMTP_SENDER_EMAIL;
        const smtpPassword = process.env.SMTP_APP_PASSWORD;

        if (!smtpSender) {
          console.error('[SMTP Notification Error] Missing process.env.SMTP_SENDER_EMAIL configuration.');
        }
        if (!smtpPassword) {
          console.error('[SMTP Notification Error] Missing process.env.SMTP_APP_PASSWORD configuration.');
        }

        if (smtpSender && smtpPassword) {
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // uses STARTTLS
            auth: {
              user: smtpSender,
              pass: smtpPassword,
            },
          });

          const recipients = [
            'karthik@myhappyjourney.com',
            'Yashwant@myhappyjourney.com',
            'chandan@globalinfoedge.com',
          ];

          const subject = `New Lead: ${rawName} - ${rawDestination}`;
          const enquiryIdText = crmResult.enquiry_id ? String(crmResult.enquiry_id) : 'N/A';

          const textBody = `New Lead Submission Received:
----------------------------------------
Name: ${rawName}
Email: ${rawEmail}
Phone: ${cleanPhone}
City: ${rawCity}
Destination / Package: ${rawDestination}
Travel Date: ${rawFromDate}
Duration: ${rawDuration}
Adults: ${adultsNum}
Children: ${childrenNum}
Budget: ${rawBudget || 'Not specified'}
CRM Enquiry ID: ${enquiryIdText}
----------------------------------------`;

          const htmlBody = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #0f172a; color: #ffffff; padding: 16px 20px;">
                <h2 style="margin: 0; font-size: 18px; font-weight: 700;">New Lead Notification</h2>
                <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">MyHappyJourney Website Lead Form</p>
              </div>
              <div style="padding: 20px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 35%;">Name:</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${rawName}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email:</td>
                    <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${rawEmail}" style="color: #2563eb; text-decoration: none;">${rawEmail}</a></td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Phone:</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;"><a href="tel:+91${cleanPhone}" style="color: #059669; text-decoration: none;">+91 ${cleanPhone}</a></td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Departure City:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${rawCity}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Destination / Tour:</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${rawDestination}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Travel Date:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${rawFromDate}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Duration:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${rawDuration}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Pax:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${adultsNum} Adults, ${childrenNum} Children</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Budget:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${rawBudget || 'Not specified'}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f1f5f9;">
                    <td style="padding: 8px 0; font-weight: 600; color: #64748b;">CRM Enquiry ID:</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 700; color: #0284c7;">${enquiryIdText}</td>
                  </tr>
                </table>
              </div>
            </div>
          `;

          await transporter.sendMail({
            from: `"MyHappyJourney Website" <${smtpSender}>`,
            to: recipients.join(', '),
            subject,
            text: textBody,
            html: htmlBody,
          });
        }
      } catch (emailErr: any) {
        console.error('[SMTP Notification Error] Failed to send email alert for lead:', emailErr?.message || emailErr);
      }

      return NextResponse.json({
        ok: true,
        enquiry_id: crmResult.enquiry_id || null,
        assigned_emp_id: crmResult.assigned_emp_id || null,
        message: crmResult.message || 'Lead saved in CRM.',
      });
    }

    // Log unexpected responses with their exact status and return values to aid debugging in production logs
    console.error('[CRM API Rejection] CRM did not return success.', {
      status: crmStatus,
      payload_submitted: crmPayload,
      crm_response_body: crmResult,
    });

    if (crmStatus === 422) {
      return NextResponse.json(
        {
          ok: false,
          error: 'validation_failed',
          message: crmResult?.message || 'The submitted details could not be validated by CRM.',
          fields: crmResult?.fields || undefined,
        },
        { status: 422 }
      );
    }

    if (crmStatus === 401) {
      return NextResponse.json(
        {
          ok: false,
          error: 'crm_auth_error',
          message: "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: 'crm_error',
        message: crmResult?.message || "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  } catch (err: any) {
    console.error('[CRM API Exception] Unhandled server error while processing lead:', err);
    return NextResponse.json(
      {
        ok: false,
        error: 'server_error',
        message: "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  return handleLeadSubmission(req);
}
