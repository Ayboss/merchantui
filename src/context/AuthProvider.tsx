import React, { createContext, useState } from 'react';
import { AuthType } from './types';

export type AuthContextProviderTypes = {
  auth: AuthType | null;
  setAuth: React.Dispatch<any>;
};

const AuthContext = createContext<AuthContextProviderTypes>({
  auth: null,
  setAuth: () => {}
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthType | null>(() =>
    JSON.parse(localStorage.getItem('user')!)
  );

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
