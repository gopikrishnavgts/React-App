import { useState } from 'react';

// Hardcoded API key - SECURITY VIOLATION
const API_KEY = 'sk-1234567890abcdef';
const API_SECRET = 'secret_abc123xyz789';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    console.log('Fetching user with ID:', userId); // Console log violation
    setLoading(true);

    // No error handling - missing try-catch
    const response = await fetch(`https://api.example.com/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'X-Secret': API_SECRET
      }
    });
    const data = await response.json();
    console.log('User data received:', data); // Another console log
    setUser(data);
    setLoading(false);
  };

  return (
    <div className="user-profile">
      <button onClick={fetchUser}>Load User</button>
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
          <img src={user.avatar} width="150" />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
