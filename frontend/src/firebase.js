import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7LfqZkiPzK_SUbbFz76HcJoTRhH5KFA0",
  authDomain: "stackoverflow-4a7ff.firebaseapp.com",
  projectId: "stackoverflow-4a7ff",
  storageBucket: "stackoverflow-4a7ff.appspot.com",
  messagingSenderId: "328538876055",
  appId: "1:328538876055:web:23f794e793a9592b17e1d2",
  measurementId: "G-GPZH69HLFV"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;


