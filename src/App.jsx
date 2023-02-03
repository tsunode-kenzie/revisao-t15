import { useEffect, useState } from "react";
import "./App.css";
import { BroadcastModal } from "./components/BroadcastModal";

export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [numbers, setNumbers] = useState([]);

  console.log("Renderizei");

  // somente depois que o componente é montado, ou seja, quando ele estiver aparecendo em tela
  useEffect(() => {
    console.log("Componente foi montado");

    setNumbers([1, 2, 3]);
    return () => {
      console.log("Desmontando");
    };
  }, []);

  return (
    <div className="App">
      <h1>Teste</h1>

      <button onClick={() => setIsOpenModal(!isOpenModal)}>Abrir/fechar</button>

      {isOpenModal ? <BroadcastModal /> : null}
    </div>
  );
}
