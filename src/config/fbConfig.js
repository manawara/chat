import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

const fbConfig = {
  apiKey: 'AIzaSyDw3sQGV4PYo7mTeylCF7Ue5Gmfr4tdJxU',
  authDomain: 'chat-fe971.firebaseapp.com',
  databaseURL: 'https://chat-fe971.firebaseio.com',
  projectId: 'chat-fe971',
  storageBucket: 'chat-fe971.appspot.com',
  messagingSenderId: '900735082342',
  appId: '1:900735082342:web:e3e5a367a87cb85ba1b2a7',
  measurementId: 'G-VSVCMJT2EY',
};

firebase.initializeApp(fbConfig);
firebase.functions();
firebase.firestore();

export default firebase;
