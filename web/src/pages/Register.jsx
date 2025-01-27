import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Eye, EyeOff } from 'lucide-react';
import { registerSchema } from '../schemas';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fetchErrors, setFetchErrors] = useState({});

  const onSubmit = async (values, actions) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      }); 
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setFetchErrors(data.errors);
        console.log(data.errors);
        return;
      }

      console.log('Registration successful!', data);
      // actions.resetForm();
      // navigate('/login');
    } catch (err) {
      setFetchErrors({ general: 'Something went wrong. Please try again.' });
      console.error('Error during registration:', err);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit,
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
        <form className='space-y-6' autoComplete='off' onSubmit={handleSubmit}>
          {/* email input */}
          <div>
            <label className='block text-sm font-medium text-gray-400 mb-2'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {fetchErrors.email && (
              <p className='text-red-500 text-sm mt-1'>{fetchErrors.email}</p>
            )}
            {/* {errors.email && touched.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )} */}
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
                className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors pr-10'
                placeholder='Create a password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <button
                type='button'
                onClick={() => togglePasswordVisibility('password')}
                className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-200'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && touched.password && (
              <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
            )}
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
                className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors pr-10'
                placeholder='Confirm your password'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                type='button'
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-200'
                aria-label={
                  showConfirmPassword ? 'Hide password' : 'Show password'
                }
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {/* submit button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-lg transition-colors font-medium ${
              isSubmitting
                ? 'bg-blue-500 opacity-50 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Loading...' : 'Create account'}
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
