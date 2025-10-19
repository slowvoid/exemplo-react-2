import { useState } from "react";
import BoxComponent from "./components/BoxComponent";
import { CorContext } from "./contexts/CorContext";
import LabelComponent from "./components/LabelComponent";

function UseContextHook() {
  const [cor, setCor] = useState("#ffffff");

  const alterarCor = () => {
    const r = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
    const g = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
    const b = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
    const cor = `#${r}${g}${b}`;
    console.log(cor);
    setCor(cor);
  };
  
  return (
    <>
      <CorContext value={cor}>
        <BoxComponent />
      </CorContext>
      <LabelComponent texto={"Fora de CorContext"} />
      <button onClick={() => alterarCor()}>Alterar cor do texto</button>
    </>
  );
}

export default UseContextHook;