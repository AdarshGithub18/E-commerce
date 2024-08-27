// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDS6HiHQw4P0DyvQkIsLvOC2-7I3vvQ5WQ',
  authDomain: 'urbancart-e37e4.firebaseapp.com',
  projectId: 'urbancart-e37e4',
  storageBucket: 'urbancart-e37e4.appspot.com',
  messagingSenderId: '634992835215',
  appId: '1:634992835215:web:1525a181a9637aa2554efa',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
