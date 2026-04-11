import { getAnalytics, isSupported } from 'firebase/analytics';
import {
  type FirebaseApp,
  type FirebaseOptions,
  getApps,
  initializeApp,
} from 'firebase/app';
import type { Auth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import APP_CONFIG from '../app-config';

const firebaseConfig: FirebaseOptions = {
  apiKey: APP_CONFIG.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: APP_CONFIG.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: APP_CONFIG.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: APP_CONFIG.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function hasMinimumFirebaseConfig(): boolean {
  const key = firebaseConfig.apiKey?.trim();
  const pid = firebaseConfig.projectId?.trim();
  return Boolean(key && pid);
}

/** `undefined` = not resolved yet; `null` = unavailable (SSR, missing config, or init failed). */
let firebaseAppCache: FirebaseApp | null | undefined;
let firebaseAuthCache: Auth | null | undefined;

/**
 * Firebase must not initialize during `next build` / SSR: it throws invalid-api-key when
 * env is missing or wrong. Init only in the browser on first use.
 */
export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === 'undefined') {
    return null;
  }

  if (firebaseAppCache !== undefined) {
    return firebaseAppCache;
  }

  if (!hasMinimumFirebaseConfig()) {
    firebaseAppCache = null;
    return null;
  }

  try {
    firebaseAppCache =
      getApps().length > 0 ? getApps()[0]! : initializeApp(firebaseConfig);
  } catch {
    firebaseAppCache = null;
  }

  if (firebaseAppCache) {
    void isSupported().then((supported) => {
      if (supported) {
        try {
          getAnalytics(firebaseAppCache!);
        } catch {
          /* optional */
        }
      }
    });
  }

  return firebaseAppCache;
}

export function getFirebaseAuth(): Auth | null {
  if (typeof window === 'undefined') {
    return null;
  }

  if (firebaseAuthCache !== undefined) {
    return firebaseAuthCache;
  }

  const app = getFirebaseApp();
  if (!app) {
    firebaseAuthCache = null;
    return null;
  }

  try {
    firebaseAuthCache = getAuth(app);
  } catch {
    firebaseAuthCache = null;
  }

  return firebaseAuthCache;
}

/** Lazy Firestore — only after a successful app init on the client. */
export function getFirebaseDb() {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
}

/** Lazy Storage — only after a successful app init on the client. */
export function getFirebaseStorage() {
  const app = getFirebaseApp();
  return app ? getStorage(app) : null;
}
