import firebase from 'firebase';

// add the values and get rolling
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: 'social-animals-2019.appspot.com',
  messagingSenderId: ''
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
