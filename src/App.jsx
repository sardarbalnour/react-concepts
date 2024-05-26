import Parent from "./components/Parent";
import WelcomeMessage from "./components/WelcomeMessage";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <>
      <h1>react concepts</h1>
      {/* <Parent /> */}
      <WelcomePage>
        <WelcomeMessage userName="Sardar"/>
      </WelcomePage>
    </>
  );
}

export default App;
