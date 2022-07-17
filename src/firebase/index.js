import { initializeApp }  from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBxOFuVW6Mw9RXZOoySPyZllxX9Tcsp1MI",
  authDomain: "safari-adventures-20d8f.firebaseapp.com",
  projectId: "safari-adventures-20d8f",
  storageBucket: "safari-adventures-20d8f.appspot.com",
  messagingSenderId: "341449721799",
  appId: "1:341449721799:web:50cd2d2f3e9d40a130bbe2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db }