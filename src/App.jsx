import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://www.roblox.com/users/214354501/profile"
          target="_blank"
        >
          <img src="/Monke.png" className="logo Monke" alt="BlackJackie logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + BlackJackie + React</h1>
      <div className="card">
        <p>My Site Is Currently Being Built Up, Using Vite+React+Bootstrap!</p>
        <p className="read-the-docs">
          Check In Later To Check If It's Done Yet!
        </p>
      </div>
    </div>
  );
}

export default App;
