import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
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