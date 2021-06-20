import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBJeetiWq3lf5jYwZ2mUa1zw86eyAAu58',
  authDomain: 'udemy-vue-firebase-sites-c3766.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-c3766',
  storageBucket: 'udemy-vue-firebase-sites-c3766.appspot.com',
  messagingSenderId: '153187338793',
  appId: '1:153187338793:web:37bbd45acd3a946286ea38',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
