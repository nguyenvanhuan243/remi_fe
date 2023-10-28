function isProduction() {
  return process.env.NODE_ENV === 'production';
}

// Start Front End
function getBaseUrl() {
  if (isProduction()) {
    return "https://remi-frontend-ruae.onrender.com"
  }
  return "http://localhost:3001"
}
// End Front End

// Start backend
function getApiBaseUrl() {
  if (isProduction()) {
    return "https://remitano-backend.onrender.com"
  }
  return "http://localhost:3000"
}

function getApiUrl() {
  if (isProduction()) {
    return "https://remitano-backend.onrender.com/api/v1"
  }
  return "http://localhost:3000/api/v1"
}

// End BackEnd
function getDefaultAvatar() {
  let randomNumber = Math.floor(Math.random() * 3);
  const imageList = [
    'https://i.ibb.co/NWrSrLR/Screen-Shot-2022-08-08-at-21-30-04.png',
    'https://insights.dice.com/wp-content/uploads/2020/05/shutterstock_1445888471.jpg',
  ]
  if (imageList[randomNumber] === undefined) randomNumber = 0
  return imageList[randomNumber]
}

function getRequestToken() {
  return 'WzsxFR-_mCToRy4aIgIxzg';
}

const config = { 
  BASE_URL: getBaseUrl(),
  API_BASE_URL: getApiBaseUrl(),
  API_URL: getApiUrl(),
  DEFAULT_AVATAR: getDefaultAvatar(),
  REQUEST_TOKEN: getRequestToken(),
};

export default config;
