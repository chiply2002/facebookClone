// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZURBYJFy_cvezhERWNmBPKyu2UQy63j0',
  authDomain: 'facebookclone-6fb66.firebaseapp.com',
  projectId: 'facebookclone-6fb66',
  storageBucket: 'facebookclone-6fb66.appspot.com',
  messagingSenderId: '446710526557',
  appId: '1:446710526557:web:d5b264e8d61ee3cd03d3b4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
