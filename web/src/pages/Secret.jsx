import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Secret() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/auth/userInfo',
          {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user info');
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div className='text-red-500'>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pt-20'>
      <div className='rounded-2xl backdrop-blur-md bg-white/5 border border-red-900/50 p-8 max-w-2xl mx-auto'>
        <h2 className='text-xl font-bold text-white'>User Info</h2>
        <p className='text-white'>ID: {user.id}</p>
        <p className='text-white'>Email: {user.email}</p>
        <div className='flex items-center gap-4 mb-6'>
          <div className='h-3 w-3 rounded-full bg-red-500 animate-pulse' />
          <h2 className='text-2xl font-bold text-red-500'>
            TOP SECRET: Operation Midnight Shadow
          </h2>
        </div>
        <div className='space-y-4 text-gray-300'>
          <p className='font-mono'>[CLASSIFIED] Date: 2025-03-15</p>
          <p>
            Intelligence reports indicate a covert operation codenamed "Midnight
            Shadow" is in progress. The target: an advanced AI system capable of
            [REDACTED].
          </p>
          <p>
            Estimated casualties: [REDACTED] Location: [REDACTED] Time of
            attack: [REDACTED]
          </p>
          <div className='text-red-400 font-mono mt-6'>
            WARNING: This information is classified. Unauthorized access will
            result in immediate [REDACTED].
          </div>
        </div>
      </div>
    </div>
  );
}
