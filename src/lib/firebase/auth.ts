import {
  GoogleAuthProvider,
  type User,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
  signInWithPopup,
} from 'firebase/auth';
import { getFirebaseAuth } from './firebase-config';

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  const auth = getFirebaseAuth();
  if (!auth) {
    return () => {};
  }
  return _onAuthStateChanged(auth, callback);
}

export function onIdTokenChanged(callback: (user: User | null) => void) {
  const auth = getFirebaseAuth();
  if (!auth) {
    return () => {};
  }
  return _onIdTokenChanged(auth, callback);
}

export async function signInWithGoogle() {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error(
      'Firebase Auth is not configured. Check NEXT_PUBLIC_FIREBASE_* in .env.local.',
    );
  }

  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  if (!result || !result.user) {
    throw new Error('Google sign in failed');
  }
  return result;
}

export async function signOutWithGoogle() {
  const auth = getFirebaseAuth();
  if (!auth) {
    return;
  }
  await auth.signOut();
}
