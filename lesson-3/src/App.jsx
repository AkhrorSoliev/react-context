import Component1 from "./components/Component1";
import { useState } from "react";
import "./App.css";

import { createContext } from "react";
export const Context = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>App</h1>
      <Context.Provider value={{ count, setCount }}>
        <Component1 />
      </Context.Provider>
    </div>
  );
}

export default App;
