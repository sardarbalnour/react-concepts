import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <ChildA number={number} />
      <ChildB number={number} />
    </div>
  );
}

export default Parent;
