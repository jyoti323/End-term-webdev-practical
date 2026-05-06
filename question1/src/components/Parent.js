import React from "react";
import { UserContext } from "../context/UserContext";
import Child from "./Child";

function Parent() {
  const user = {
    name: "Jyoti Sharma",
    role: "Student"
  };

  return (
    <UserContext.Provider value={user}>
      <h1>Parent Component</h1>
      <Child />
    </UserContext.Provider>
  );
}

export default Parent;