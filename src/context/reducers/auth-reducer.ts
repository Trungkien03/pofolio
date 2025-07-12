import {
  AUTH_ACTION,
  AuthAction,
  AuthContextType,
} from '@/context/types/auth.types';
import { Reducer } from 'react';

const AuthReducer: Reducer<AuthContextType, AuthAction> = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.SET_USER:
      return { ...state, user: action.payload };
    case AUTH_ACTION.SET_AUTH_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AUTH_ACTION.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
