import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAIHGoSzjcDEITOk5gALv63gq3Jkk21MI8',
  authDomain: 'crwn-db-581ec.firebaseapp.com',
  projectId: 'crwn-db-581ec',
  storageBucket: 'crwn-db-581ec.appspot.com',
  messagingSenderId: '768118711054',
  appId: '1:768118711054:web:2f9a305b4cea1b193eed5f',
  measurementId: 'G-JFN9D45N8T',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
