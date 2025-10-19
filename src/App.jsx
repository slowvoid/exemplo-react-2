import UseStateHook from "./UseStateHook";

import "./App.css";
import UseReducerHook from "./UseReducerHook";
import UseContextHook from "./UseContextHook";
import UseEffectHook from "./UseEffectHook";
import { useState } from "react";
import UseRefHook from "./UseRefHook";
import UseMemoHook from "./UseMemoHook";

function App() {
  const [exibir, setExibir] = useState(true);
  const listaDeAlunos = [
    { id: 1, nome: "Aluno 1", exibir: true },
    { id: 2, nome: "Aluno 2", exibir: true },
    { id: 3, nome: "Aluno 3", exibir: false },
    { id: 4, nome: "Aluno 4", exibir: false },
    { id: 5, nome: "Aluno 5", exibir: true },
  ];
  const [alunos, setAlunos] = useState(listaDeAlunos);
  const toggleAluno = (id) => {
    const listaAtualizada = alunos.map((a) => {
      if(a.id === id) {
        a.exibir = !a.exibir;
      }
      return a;
    });
    setAlunos(listaAtualizada);
  }
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseContextHook /> */}
      {/* {exibir ? <UseEffectHook/> : null } */}
      {/* <UseEffectHook /> */}
      {/* {exibir ? <UseRefHook /> : null } */}
      {/* <UseRefHook /> */}
      {/* <button onClick={() => setExibir(!exibir)}>Exibir / Esconder</button> */}
      <UseMemoHook listaDeAlunos={alunos}/>
      <button onClick={() => {toggleAluno(3)}}>Exibir/Esconder Aluno 3</button>
    </>
  )
}

export default App;