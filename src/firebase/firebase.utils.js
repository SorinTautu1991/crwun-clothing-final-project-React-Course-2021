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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user!', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
