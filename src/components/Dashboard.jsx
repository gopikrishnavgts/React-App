import { useState, useEffect } from 'react';

function Dashboard() {
  const [stats, setStats] = useState([]);

  // Missing dependency array - useEffect violation
  useEffect(() => {
    console.log('Dashboard mounted'); // Console log violation
    loadStats();
  });

  const loadStats = async () => {
    // HTTP instead of HTTPS - security violation
    const response = await fetch('http://api.example.com/stats');
    const data = await response.json();
    console.log(data); // Console log violation
    setStats(data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ marginTop: 20 }}>
        {stats.map((stat, index) => (
          <div key={index}>
            <span>{stat.label}</span>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
