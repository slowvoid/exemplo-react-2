import { useMemo, useState } from "react";

function UseMemoHook({listaDeAlunos}) {
  const [contagem, setContagem] = useState(0);
  const alunos = useMemo(() => {
    console.log("Montando lista de alunos");
    return listaDeAlunos.filter(a => a.exibir);
  }, [listaDeAlunos]);
  
  return (
    <>
      {alunos.map(e => <p key={e.id}>{e.nome}</p>)}
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Incrementar</button>
    </>
  );
}

export default UseMemoHook;