// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBd4q3HgG40Mg_yuU8fmJWW2Ttx0mmz9PI',
  authDomain: 'dragon-breaking-news-de6ea.firebaseapp.com',
  projectId: 'dragon-breaking-news-de6ea',
  storageBucket: 'dragon-breaking-news-de6ea.firebasestorage.app',
  messagingSenderId: '641615549521',
  appId: '1:641615549521:web:cd06dc4a433f6d68f51470',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;