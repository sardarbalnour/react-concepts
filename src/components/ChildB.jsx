import React from "react";

function ChildB({ number, button }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Child B</h3>
      <p>{number}</p>
      {button}
    </div>
  );
}

export default ChildB;
