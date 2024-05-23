
function ChildA({ number, setNumber }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h3>Child A</h3>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 25)}>MEOW</button>
    </div>
  );
}

export default ChildA;
