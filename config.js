// Start backend
function getApiBaseUrl() {
  return process.env.API_BASE_URL || "https://remi-api.onrender.com"
}

function getSocketBaseUrl() {
  return process.env.SOCKET_BASE_URL || "wss://remi-api.onrender.com/cable"
}

const config = {
  API_BASE_URL: getApiBaseUrl(),
  SOCKET_BASE_URL: getSocketBaseUrl()
};

export default config;
