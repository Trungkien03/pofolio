import { AuthContext } from '@/context/providers/auth-provider';
import { useContext } from 'react';

const useAuthContext = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (!state || !dispatch) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return { state, dispatch };
};

export default useAuthContext;
