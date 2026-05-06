import React from "react";
import GrandChild from "./grandChild"

function Child() {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}

export default Child;