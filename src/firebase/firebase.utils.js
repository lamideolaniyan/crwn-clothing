import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB_CiIGO8NVtdbMKHTnxCYnhj1siyA8eW4',
  authDomain: 'crwn-db-21fa5.firebaseapp.com',
  databaseURL: 'https://crwn-db-21fa5.firebaseio.com',
  projectId: 'crwn-db-21fa5',
  storageBucket: 'crwn-db-21fa5.appspot.com',
  messagingSenderId: '967378887839',
  appId: '1:967378887839:web:89e721563eaa6f1dd7aeaa',
  measurementId: 'G-9JLZ8WZ063',
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...addtionalData });
    } catch (error) {
      console.log('error creating user', error.message);
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
