import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  token: string | null;
  role: string | null;
  login: (token: string, role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: any) {

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [role, setRole] = useState(
    localStorage.getItem("role")
  );

  function login(token: string, role: string) {

    const decoded: any = jwtDecode(token);

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setToken(token);
    setRole(role);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setToken(null);
    setRole(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        login,
        logout,
        isAuthenticated: !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}