import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBaJXyrCPFUFkfmAm0_fr6TZupZeJVScao',
  authDomain: 'quiz-a77a.firebaseapp.com',
  projectId: 'quiz-a77a',
  storageBucket: 'quiz-a77a.appspot.com',
  messagingSenderId: '349595898607',
  appId: '1:349595898607:web:7ecf95a9111bb9cff1411a',
  databaseURL: 'https://quiz-a77a-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

export const signin = async (event, email, password) => {
  event.preventDefault();
  
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = async (event, email, password) => {
  event.preventDefault();
  
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};