import {
  GoogleAuthProvider,
  type User,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
  signInWithPopup,
} from 'firebase/auth';
import { firebaseAuth } from './firebase-config';

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  return _onAuthStateChanged(firebaseAuth, callback);
}

export function onIdTokenChanged(callback: (user: User | null) => void) {
  return _onIdTokenChanged(firebaseAuth, callback);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(firebaseAuth, provider);

  if (!result || !result.user) {
    throw new Error('Google sign in failed');
  }
  return result;
}

export async function signOutWithGoogle() {
  await firebaseAuth.signOut();
}
