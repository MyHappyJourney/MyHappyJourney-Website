import React from 'react';
import Link from 'next/link';
import { Heart, Users, Briefcase, Crown, Mountain, Compass, ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  image: string;
}

export const KeralaTravelStyleSection: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 'honeymoon',
      title: 'Honeymoon Package',
      subtitle: 'Romantic candlelit cruises & secluded hill station retreats',
      href: '/kerala/kerala-honeymoon-tour-packages',
      icon: <Heart className="w-5 h-5 text-white fill-white" />,
      image: '/images/725f2b11-0681-454f-889c-a4f9966cc350.png',
    },
    {
      id: 'family',
      title: 'Family Holiday Package',
      subtitle: 'Spacious stays, private houseboats & multi-generational fun',
      href: '/kerala/kerala-family-holiday-tour-packages',
      icon: <Users className="w-5 h-5 text-white" />,
      image: '/images/kk.png',
    },
    {
      id: 'senior',
      title: 'Senior Citizen Tour',
      subtitle: 'Comfortable gentle-paced itineraries & caring ground support',
      href: '/kerala/kerala-senior-citizen-tour-packages',
      icon: <Crown className="w-5 h-5 text-white" />,
      image: '/images/chat.png',
    },
    {
      id: 'group',
      title: 'Group Tour Package',
      subtitle: 'Seamless private coaches, bonding activities & group discounts',
      href: '/kerala/kerala-group-tour-packages',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      image: '/images/chatt.png',
    },
    {
      id: 'luxury',
      title: 'Luxury Holiday Package',
      subtitle: 'Where every journey becomes an extraordinary 5-star experience',
      href: '/kerala/kerala-luxury-holiday-tour-packages',
      icon: <Mountain className="w-5 h-5 text-white" />,
      image: '/images/hehe.png',
    },
    {
      id: 'educational',
      title: 'School & College Tour',
      subtitle: 'Where learning meets adventure with safety and expert guides',
      href: '/kerala/kerala-school-college-tour-packages',
      icon: <Compass className="w-5 h-5 text-white" />,
      image: '/images/uuu.png',
    },
  ];

  return (
    <section id="travel-styles-section" className="py-16 sm:py-20 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#0B3996] uppercase tracking-widest mb-2">
            DESIGNED FOR YOUR TRAVEL STYLE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight mb-3">
            Explore Kerala By Travel Style
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Choose the perfect way to experience God's Own Country — tailored for couples, families, seniors, groups, and students.
          </p>

          {/* Brand Red Accent Bar */}
          <div className="w-12 h-1 bg-[#FF4B00] rounded-full mx-auto mt-4" />
        </div>

        {/* 6 Category Navigation Cards (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[16/10] sm:aspect-[4/3] bg-slate-900 border border-gray-100 flex flex-col justify-end cursor-pointer block"
              id={`travel-style-card-${cat.id}`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95" />

              <div className="relative z-10 p-6 flex flex-col justify-end text-left">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:bg-[#FF4B00] transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#FF9900] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                  {cat.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#FF9900] group-hover:text-white transition-colors">
                  <span>Explore Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
