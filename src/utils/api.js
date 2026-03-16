// API utility functions

// Hardcoded API endpoints and keys - SECURITY VIOLATION
const API_BASE_URL = 'http://api.example.com'; // HTTP instead of HTTPS
const SECRET_TOKEN = 'my-super-secret-api-key-12345';

// Missing JSDoc comment - DOCUMENTATION VIOLATION
export async function fetchUserData(userId) {
  console.log('Fetching user:', userId); // Console log violation

  // No error handling - CODE QUALITY VIOLATION
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    headers: {
      'Authorization': `Bearer ${SECRET_TOKEN}`,
      'X-Secret-Key': SECRET_TOKEN
    }
  });

  const data = await response.json();
  console.log('Response:', data); // Console log violation
  return data;
}

// No input validation - SECURITY VIOLATION
export function processPayment(amount, cardNumber, cvv) {
  console.log('Processing payment:', amount, cardNumber, cvv); // Logging sensitive data!

  // Hardcoded test credentials - SECURITY VIOLATION
  const testCard = '4111111111111111';
  const testCVV = '123';

  return fetch(`${API_BASE_URL}/payments`, {
    method: 'POST',
    body: JSON.stringify({
      amount,
      card: cardNumber || testCard,
      cvv: cvv || testCVV
    })
  });
}

// Missing error handling and validation
export const updateUserProfile = async (userId, data) => {
  console.log('Updating profile for user:', userId); // Console log violation

  // SQL injection risk - no sanitization
  const query = `UPDATE users SET name='${data.name}' WHERE id=${userId}`;
  console.log('Query:', query); // Exposing query structure

  // No try-catch - CODE QUALITY VIOLATION
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return response.json();
};

// Magic numbers everywhere - CODE QUALITY VIOLATION
export function calculateDiscount(price) {
  if (price > 100) return price * 0.15; // 15% discount
  if (price > 50) return price * 0.10;  // 10% discount
  return price * 0.05; // 5% discount
}
