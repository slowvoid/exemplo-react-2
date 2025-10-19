import UseStateHook from "./UseStateHook";

import "./App.css";
import UseReducerHook from "./UseReducerHook";
import UseContextHook from "./UseContextHook";
import UseEffectHook from "./UseEffectHook";
import { useState } from "react";
import UseRefHook from "./UseRefHook";

function App() {
  const [exibir, setExibir] = useState(true);
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseContextHook /> */}
      {/* {exibir ? <UseEffectHook/> : null } */}
      {/* <UseEffectHook /> */}
      {exibir ? <UseRefHook /> : null }
      {/* <UseRefHook /> */}
      <button onClick={() => setExibir(!exibir)}>Exibir / Esconder</button>
    </>
  )
}

export default App;