import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className='max-w-md mx-auto pt-20'>
      <div className='rounded-2xl backdrop-blur-md bg-white/5 border border-gray-800 p-8'>
        <h2 className='text-2xl font-bold text-center mb-8'>
          Create an account
        </h2>
        <form className='space-y-6' autoComplete='off'>
          {/* email input */}
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              required
              className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors'
              placeholder='Enter your email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {/* password input */}
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                required
                className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors pr-10'
                placeholder='Create a password'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <button
                type='button'
                onClick={() => togglePasswordVisibility('password')}
                className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200'
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/* confirm password input */}
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Confirm Password
            </label>
            <div className='relative'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                required
                className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors pr-10'
                placeholder='Confirm your password'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <button
                type='button'
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200'
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/* submit button */}
          <button
            type='submit'
            className='w-full px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors font-medium'
          >
            Create account
          </button>
        </form>
        {/* redirect */}
        <div className='mt-6 text-center text-gray-400'>
          Already have an account?
          <Link to='/login' className='text-blue-400 hover:underline ml-1'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
