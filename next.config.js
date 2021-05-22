module.exports = {
  env: {
    APP_MODE: process.env.APP_MODE || 'Dev',
    PUBLIC_API_TOKEN:
      process.env.PUBLIC_API_TOKEN || '95D64240-428B-459C-B018-472D353F3904',
    REACT_APP_API_URI:
      process.env.REACT_APP_API_URI || 'http://localhost:8080/api',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '885573154147-a703sqab7pvfhtp5doadgpr8eai052ga.apps.googleusercontent.com',
  },
  experimental: {
    jsconfigPaths: true,
    granularChunks: true,
  },
};
