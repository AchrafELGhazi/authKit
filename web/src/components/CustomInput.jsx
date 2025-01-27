import { useState } from 'react';
import { useField } from 'formik';
import { Eye, EyeOff } from 'lucide-react';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className='block text-sm font-medium text-gray-400 mb-2'>
        {label}
      </label>
      <div className='relative'>
        <input
          {...field}
          {...props}
          type={
            props.type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : props.type
          }
          className='w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors'
        />
        {props.type === 'password' && (
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-200'
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        {meta.touched && meta.error && (
          <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
