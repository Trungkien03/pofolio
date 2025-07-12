// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import APP_CONFIG from '../app-config';

const firebaseConfig = {
  apiKey: APP_CONFIG.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: APP_CONFIG.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: APP_CONFIG.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);

export { analytics, app, db, firebaseAuth, storage };
