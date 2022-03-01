import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyB22dUG1EUwm7Tw-PdMMFYUaxHC1BF48gU",
    authDomain: "react-project-25395.firebaseapp.com",
    projectId: "react-project-25395",
    storageBucket: "react-project-25395.appspot.com",
    messagingSenderId: "565160456293",
    appId: "1:565160456293:web:5b96b86fa7b15ca396568c"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
// CartContext
export const getFirestore = () => firebase.firestore(app);
// UserContext
export const getAuth = () => firebase.auth(app);