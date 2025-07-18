import { createContext, useState } from "react";

//^1. Create Context:
// export const AuthContext = createContext(initialValue);
export const AuthContext = createContext(null);

//^2. Create Provider:
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
