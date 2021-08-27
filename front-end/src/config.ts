Object.entries(process.env).forEach(([key, value]) => console.log(key, value));

const config = {
  cognito: {
    // REGION: "us-west-2",
    REGION: process.env.REACT_APP_REGION,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
  },
};

export default config;
