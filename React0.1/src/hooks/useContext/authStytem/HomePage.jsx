import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const HomePage = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  return (
    <div>
      <h4>Home</h4>
      {user ? (
        <>
          <p>Welcome, {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => login(username)}>Login</button>
        </>
      )}
    </div>
  );
};

export default HomePage;
