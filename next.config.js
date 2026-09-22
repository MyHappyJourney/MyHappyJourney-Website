/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/kerala/kerala-honeymoon-packages',
        destination: '/kerala/kerala-honeymoon-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala/kerala-family-holiday-packages',
        destination: '/kerala/kerala-family-holiday-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala/kerala-senior-citizen-tours',
        destination: '/kerala/kerala-senior-citizen-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala/kerala-luxury-holiday-packages',
        destination: '/kerala/kerala-luxury-holiday-tour-packages',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
