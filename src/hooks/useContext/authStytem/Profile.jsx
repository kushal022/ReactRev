import React, { use, useContext } from "react";
import { AuthContext } from "./AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>Profile</p>
          <p>Your Most Welcome! {user}</p>
        </>
      ) : (
        <>
          <p>Profile</p>
          <p>OOPs!, You must have to login</p>
        </>
      )}
    </div>
  );
};

export default Profile;
