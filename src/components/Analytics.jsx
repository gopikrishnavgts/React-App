import { useState } from 'react';

// Hardcoded credentials - SECURITY VIOLATION
const ANALYTICS_KEY = 'analytics_secret_key_12345';
const ADMIN_PASSWORD = 'admin123';

function Analytics() {
  const [data, setData] = useState([]);

  // Missing async error handling - CODE QUALITY VIOLATION
  const loadAnalytics = async () => {
    console.log('Loading analytics...'); // Console log violation
    console.log('API Key:', ANALYTICS_KEY); // Exposing secrets in console

    // HTTP instead of HTTPS - SECURITY VIOLATION
    const response = await fetch('http://analytics.example.com/api/data', {
      headers: {
        'X-API-Key': ANALYTICS_KEY,
        'Authorization': ADMIN_PASSWORD
      }
    });

    const result = await response.json();
    console.log('Analytics data:', result); // Console log violation
    setData(result);
  };

  // Missing PropTypes - REACT VIOLATION
  const AnalyticsCard = ({ title, value, index }) => {
    return (
      // Using index as key - REACT VIOLATION
      <div key={index} onClick={() => console.log('Clicked:', title)}>
        <h3>{title}</h3>
        {/* Missing alt text - ACCESSIBILITY VIOLATION */}
        <img src="/chart-icon.png" width="50" />
        {/* Magic number - CODE QUALITY VIOLATION */}
        <p style={{ fontSize: 24 }}>{value}</p>
      </div>
    );
  };

  return (
    <div className="analytics-panel">
      <h1>Analytics Dashboard</h1>
      <button onClick={loadAnalytics}>Load Analytics</button>

      {/* Mapping with index as key - REACT VIOLATION */}
      {data.map((item, index) => (
        <AnalyticsCard
          key={index}
          title={item.title}
          value={item.value}
          index={index}
        />
      ))}

      {/* Dangerous HTML injection - SECURITY VIOLATION */}
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  );
}

export default Analytics;
