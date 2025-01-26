import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Single Sign-On',
    description: 'One click access to all your apps',
    icon: '🔑',
  },
  {
    title: 'Password',
    description: 'Secure password authentication',
    icon: '🔒',
  },
  {
    title: 'Multi-Factor Auth',
    description: 'Extra layer of security',
    icon: '🛡️',
  },
  {
    title: 'Social Login',
    description: 'Sign in with your favorite platforms',
    icon: '👥',
  },
  {
    title: 'Biometric',
    description: 'Fingerprint and face recognition',
    icon: '👆',
  },
  {
    title: 'Magic Link',
    description: 'Passwordless authentication',
    icon: '✨',
  },
];

export default function Home() {
  return (
    <div className='pt-20'>
      <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
        <h1 className='text-6xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text'>
          AuthKit
        </h1>
        <p className='text-xl text-gray-400'>
          The world's best login box, powered by JWT.
        </p>
        <div className='flex justify-center gap-4 pt-4'>
          <Link
            to='/register'
            className='px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors'
          >
            Get Started
          </Link>
          <Link
            to='/login'
            className='px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors'
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {features.map(feature => (
          <div
            key={feature.title}
            className='p-6 rounded-xl backdrop-blur-md bg-white/5 border border-gray-800 hover:border-gray-700 transition-colors'
          >
            <div className='text-3xl mb-4'>{feature.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-400'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
