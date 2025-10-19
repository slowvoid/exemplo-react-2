import { useState } from "react";

function UseStateHook() {
  const [ponto, setPonto] = useState({ x: 0, y: 0 });

  const btnClick = (valorX) => {
    console.log(`Adicionando ${valorX} ao eixo X do ponto`);
    // ponto.x += valorX; // Não altera o valor na tela
    // console.log(`Ponto: X:${ponto.x} | Y: ${ponto.y}`);
    // setPonto({x: ponto.x + valorX}); // Sobrescrever o valor da variavel e remove o Y
    setPonto({x: ponto.x + valorX, y: ponto.y});
  };

  return (
    <>
      <p>X: {ponto.x} | Y: {ponto.y}</p>
      <button className="margem-25" onClick={() => btnClick(5)}>Mover</button>
    </>
  );
}

export default UseStateHook;