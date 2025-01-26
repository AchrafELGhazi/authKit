import { useNavigate, Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import CustomInput from '../components/CustomInput';
import { loginSchema } from '../schemas';

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    actions.resetForm();
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
          {({ isSubmitting }) => (
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
