import React from "react";
import { AuthProvider } from "./AuthContext";
import HomePage from "./HomePage";
import Profile from "./Profile";

const AuthApp = () => {
  return (
    <AuthProvider>
      <div>
        <HomePage />
        <hr />
        <Profile />
      </div>
    </AuthProvider>
  );
};

export default AuthApp;
