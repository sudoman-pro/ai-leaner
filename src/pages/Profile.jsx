import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('loggedIn')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <p>Email: user@example.com</p>
      <p>This is your profile page.</p>
    </div>
  );
}
