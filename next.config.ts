import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
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
      {
        source: '/kerala-family',
        destination: '/kerala/kerala-family-holiday-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala-honeymoon',
        destination: '/kerala/kerala-honeymoon-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala-senior',
        destination: '/kerala/kerala-senior-citizen-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala-family-tours',
        destination: '/kerala/kerala-family-holiday-tour-packages',
        permanent: true,
      },
      {
        source: '/kerala-senior-citizen-tours',
        destination: '/kerala/kerala-senior-citizen-tour-packages',
        permanent: true,
      },
    ];
  },
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
