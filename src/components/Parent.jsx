import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Button from "./Button";

function Parent() {
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h3 style={{ color: "blue" }}>Parent</h3>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <ChildA number={number} setNumber={setNumber} />
      <ChildB number={number} button={<Button clickHandler={clickHandler} />} />
    </div>
  );
}

export default Parent;
