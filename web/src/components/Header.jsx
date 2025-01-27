import { Link, useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  const logout = async () => {
    await fetch('http://localhost:3000/api/auth/logout', {
      method: 'GET',
      credentials: 'include',
    });
    navigate('/');
  };

  return (
    <header className='fixed w-full top-9 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-[#080B14]/80 border border-gray-800 rounded-full max-w-7xl mx-auto shadow-2xl shadow-blue-500/5'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          <Link
            to='/'
            className='text-2xl font-bold text-blue-300 flex items-center gap-2'
          >
            <Shield className='w-6 h-6' />
            AuthKit
          </Link>
          <nav className='flex items-center gap-6'>
            <Link to='/' className='hover:text-blue-300 transition-colors'>
              Home
            </Link>
              <>
                <Link
                  to='/secret'
                  className='hover:text-blue-300 transition-colors'
                >
                  Secret
                </Link>
                <button
                  onClick={logout}
                  className='px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 transition-colors'
                >
                  Logout
                </button>
              </>
              <>
                <Link
                  to='/login'
                  className='px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 transition-colors'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-4 py-2 rounded-full border border-gray-700 hover:border-gray-600 transition-colors'
                >
                  Register
                </Link>
              </>
          </nav>
        </div>
      </div>
    </header>
  );
}
