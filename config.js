function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function getBaseUrl() {
  return process.env.BASE_URL;
}

function getApiBaseUrl() {
  return process.env.BACKEND_BASE_API
}

function getApiUrl() {
  return `${process.env.BACKEND_BASE_API} + /api/v1`
}

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
