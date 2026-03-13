// Utility functions for the application

export function formatDate(date) {
  console.log('Formatting date:', date); // Console log violation
  return new Date(date).toLocaleDateString();
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Missing JSDoc comment - Documentation violation
export function processUserData(userData) {
  console.log('Processing:', userData); // Console log violation
  // No input validation - Security violation
  return {
    id: userData.id,
    name: userData.name,
    // Magic number - Code quality violation
    displayName: userData.name.substring(0, 15)
  };
}
