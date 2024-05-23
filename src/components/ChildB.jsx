import React from "react";

function ChildB({ number }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Child B</h3>
      <p>{number}</p>
    </div>
  );
}

export default ChildB;
