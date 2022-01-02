import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBaJXyrCPFUFkfmAm0_fr6TZupZeJVScao',
  authDomain: 'quiz-a77a.firebaseapp.com',
  projectId: 'quiz-a77a',
  storageBucket: 'quiz-a77a.appspot.com',
  messagingSenderId: '349595898607',
  appId: '1:349595898607:web:7ecf95a9111bb9cff1411a'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);