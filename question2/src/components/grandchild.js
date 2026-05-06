import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const GrandChild = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>User: {user}</p>
      <button onClick={() => setUser("Rahul")}>
        Change User
      </button>
    </div>
  );
};

export default GrandChild;