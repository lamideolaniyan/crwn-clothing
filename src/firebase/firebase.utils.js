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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
