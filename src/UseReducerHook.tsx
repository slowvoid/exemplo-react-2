import { useReducer, useState } from "react";

interface TaskItem {
  id: number;
  nome: string;
}

interface TaskAction {
  type: string;
  id?: number;
  nome?: string;
}

let internalIdCounter = 0;

function taskReducer(tasks: TaskItem[], action: TaskAction) {
  switch(action.type) {
    case "adicionar":
      return [
        ...tasks,
        {
          id: ++internalIdCounter,
          nome: action.nome || `Nova tarefa (${internalIdCounter})`
        }
      ];
    case "remover":
      return tasks.filter(t => t.id !== action.id);
  }

  throw new Error("Ação inválida");
}

function UseReducerHook() {
  const [tasks, taskDispatcher] = useReducer(taskReducer, []);
  const [nome, setNome] = useState("");
  return (
    <>
      <h4>Tarefas</h4>
      {tasks.map(e => {
        return (
          <p key={e.id}>{e.nome} <button onClick={() => taskDispatcher({ type: "remover", id: e.id })}>Remover</button></p>
        )
      })}
      <div className="margem-25">
        <input type="text" placeholder="Nome da tarefa" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />
        <button onClick={() => taskDispatcher({ type: "adicionar", nome: nome })}>Adicionar tarefa</button>
      </div>
    </>
  );
}

export default UseReducerHook;