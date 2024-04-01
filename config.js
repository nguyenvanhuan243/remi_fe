// Start backend
function getApiBaseUrl() {
  return process.env.API_BASE_URL
}

function getSocketBaseUrl() {
  return process.env.SOCKET_BASE_URL
}

function getApiUrl() {
  return process.env.API_URL
}

const config = {
  API_BASE_URL: getApiBaseUrl(),
  API_URL: getApiUrl(),
  SOCKET_BASE_URL: getSocketBaseUrl()
};

export default config;
