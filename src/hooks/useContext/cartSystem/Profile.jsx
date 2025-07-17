import React, { use, useContext } from "react";
import { CartContext } from "./cartContext";
import Cart from "./Cart";

const Profile = () => {
  const { user } = useContext(CartContext);

  return (
    <div>
      {user ? (
        <>
          <p>Profile</p>
          <p>Your Most Welcome! {user}</p>
          <Cart/>
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
