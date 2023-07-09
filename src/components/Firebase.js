import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl9p1tQfFsSDBu5mZmFMGhAgPXmggR-hw",
  authDomain: "olearn-ff2a9.firebaseapp.com",
  projectId: "olearn-ff2a9",
  storageBucket: "olearn-ff2a9.appspot.com",
  messagingSenderId: "1016133874704",
  appId: "1:1016133874704:web:98e2e51e747ffa5e2a0695",
  measurementId: "G-S8HNWEPZ0B"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth ,storage};