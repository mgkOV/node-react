if (process.env.NODE_ENV === 'production') {
  // PRODUCTION config
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIETN_ID,
    googleClientSecret: process.env.GOOGLE_CLIETN_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
  };
} else {
  // DEV config
  module.exports = require('./dev');
}
