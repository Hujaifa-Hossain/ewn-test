import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD6hPlSWPma4bTjxZlhA5qhAE_DzxYus9I',
  authDomain: 'ewn-test-paper.firebaseapp.com',
  projectId: 'ewn-test-paper',
  storageBucket: 'ewn-test-paper.appspot.com',
  messagingSenderId: '572764064250',
  appId: '1:572764064250:web:621f74f08d46add2c07c43',
};

const app = initializeApp(firebaseConfig);
export default app;
