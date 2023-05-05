import { createContext, useState } from "react";

export type AuthContextProviderTypes = {
  auth: unknown;
  setAuth: React.Dispatch<any>;
};

const AuthContext = createContext<AuthContextProviderTypes>({
  auth: {},
  setAuth: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<any>({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
