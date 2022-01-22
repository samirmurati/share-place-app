import { createContext } from "react";
import { useAuth } from "../hooks/auth-hook";

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = (props) => {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        login,
        logout,
        userId,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
