import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();



  return (
    <div className='max-w-md mx-auto pt-20'>
      <div className='rounded-2xl backdrop-blur-md bg-white/5 border border-gray-800 p-8'>
        <h2 className='text-2xl font-bold text-center mb-8'>
          Create an account
        </h2>
        <form  className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Email address
            </label>
            <input
              type='email'
              required
              className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Password
            </label>
            <input
              type='password'
              required
              className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors'
              placeholder='Create a password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Confirm Password
            </label>
            <input
              type='password'
              required
              className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors'
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors font-medium'
          >
            Create account
          </button>
        </form>
        <div className='mt-6 text-center text-gray-400'>
          Already have an account?
          <Link to='/login' className='text-blue-400 hover:underline'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
