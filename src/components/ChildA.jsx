import StyledDiv from "./StyledDiv";

function ChildA({ number, setNumber }) {
  return (
    <StyledDiv>
      <h3>Child A</h3>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 25)}>MEOW</button>
    </StyledDiv>
  );
}

export default ChildA;
