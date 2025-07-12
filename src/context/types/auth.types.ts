export interface User {
  id: string | null;
  email: string;
  fullName: string;
  image_url: string | null;
}

export enum AUTH_ACTION {
  SET_USER = 'SET_USER',
  SET_AUTH_IS_LOADING = 'SET_AUTH_IS_LOADING',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
}

export type AuthContextType = {
  user: Partial<User> | null;
  isLoading: boolean;
  accessToken: string;
};

export const initialAuthState: AuthContextType = {
  user: null,
  isLoading: false,
  accessToken: '',
};

export type SetUserAction = {
  type: AUTH_ACTION.SET_USER;
  payload: User | null;
};

export type SetIsLoading = {
  type: AUTH_ACTION.SET_AUTH_IS_LOADING;
  payload: boolean;
};

export type SetAccessToken = {
  type: AUTH_ACTION.SET_ACCESS_TOKEN;
  payload: string;
};

export type AuthAction = SetUserAction | SetIsLoading | SetAccessToken;
