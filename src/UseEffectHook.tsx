import { useEffect } from "react";

function UseEffectHook() {
  useEffect(() => {
    console.log("Código executado após renderizar");
    return () => {
      console.log("Limpando effect");
    };
  });

  console.log("Exibido imediatamente");

  return (
    <>
      <p>Componente usando useEffect</p>
    </>
  );
}

export default UseEffectHook;