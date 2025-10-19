import { useRef, useState } from "react";

function UseRefHook () {
  const textbox = useRef(null);
  const [renders, setRenders] = useState(0);
  const valorRef = useRef(0);
  
  const aumentaValor = () => {
    valorRef.current = valorRef.current + 1;
  }

  return (
    <>
      <input type="text" ref={textbox}/>
      <button onClick={() => textbox.current.focus()}>Focar no textbox</button>
      <p>Valor ref: {valorRef.current} </p>
      <p>Renderizações: { renders }</p>
      <button onClick={() => aumentaValor()}>Incrementar</button>
      <button onClick={() => setRenders(renders + 1)}>Renderizar</button>
      <br />
    </>
  );
}

export default UseRefHook;