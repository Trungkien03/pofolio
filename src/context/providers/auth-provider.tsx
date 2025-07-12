'use client';
import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import AuthReducer from '../reducers/auth-reducer';
import {
  AuthAction,
  AuthContextType,
  initialAuthState,
} from '../types/auth.types';

export const AuthContext = createContext<{
  state: AuthContextType;
  dispatch: Dispatch<AuthAction>;
}>({ state: initialAuthState, dispatch: () => {} });

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
