function isProduction() {
  return process.env.NODE_ENV === 'production';
}

// Start backend
function getApiBaseUrl() {
  if (isProduction()) {
    return "https://remitano-backend-api.onrender.com"
  }
  return "http://localhost:3001"
}

function getSocketBaseUrl() {
  if (isProduction()) {
    return "wss://remitano-backend-api.onrender.com/cable"
  }
  return "ws://localhost:3001/cable"
}

function getApiUrl() {
  if (isProduction()) {
    return "https://remitano-backend-api.onrender.com/api/v1"
  }
  return "http://localhost:3001/api/v1"
}

const config = {
  API_BASE_URL: getApiBaseUrl(),
  API_URL: getApiUrl(),
  SOCKET_BASE_URL: getSocketBaseUrl()
};

export default config;
