function StyledDiv({ children,title }) {
  const styles = { border: "2px solid blue", padding: "10px", margin: "10px" };

  return (
    <div style={styles}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default StyledDiv;
