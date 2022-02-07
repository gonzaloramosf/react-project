import * as firebase from 'firebase/app';
import 'firebase/firestore';

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

export const getFirestore = () => {
    return firebase.firestore(app);
}

