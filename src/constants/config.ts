export default {
  login: {
    delayTime: 2000,
    loadingText: "Signing you in...",
  },
  preload: {
    delayTime: 1000
  },
  firebase: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "grid-gallery-1fc14.firebaseapp.com",
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: "grid-gallery-1fc14",
    storageBucket: "grid-gallery-1fc14.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
  },
};
