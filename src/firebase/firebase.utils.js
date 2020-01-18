import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwY-Re1H3vCU90k96N4lnP80WHDeaai6U",
  authDomain: "crwn2-db.firebaseapp.com",
  databaseURL: "https://crwn2-db.firebaseio.com",
  projectId: "crwn2-db",
  storageBucket: "crwn2-db.appspot.com",
  messagingSenderId: "607571208747",
  appId: "1:607571208747:web:c6737e1065d38cf5a2186e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
