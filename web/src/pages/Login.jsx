import { useNavigate, Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import CustomInput from '../components/CustomInput';
import { loginSchema } from '../schemas';

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error) {
          actions.setErrors({ general: data.error });
        } else {
          actions.setErrors(data.errors);
        }
        return;
      }

      console.log('Login successful!', data);
      actions.resetForm();
      navigate('/secret'); 
    } catch (err) {
      console.error('Error during login:', err);
      actions.setErrors({ general: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className='max-w-md mx-auto pt-20'>
      <div className='rounded-2xl backdrop-blur-md bg-white/5 border border-gray-800 p-8'>
        <h2 className='text-2xl font-bold text-center mb-8'>Login</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className='space-y-6'>
              <CustomInput
                label='Email address'
                name='email'
                type='email'
                placeholder='Enter your email'
              />
              <CustomInput
                label='Password'
                name='password'
                type='password'
                placeholder='Enter your password'
              />
              {errors.general && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.general}
                </div>
              )}
              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg transition-colors font-medium ${
                  isSubmitting
                    ? 'bg-blue-500 opacity-50 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Logging In...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
        <div className='mt-6 text-center text-gray-400'>
          Don't have an account?
          <Link to='/register' className='text-blue-400 hover:underline ml-1'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
