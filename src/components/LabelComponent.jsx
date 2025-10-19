import { useContext } from "react";
import { CorContext } from "../contexts/CorContext";

function LabelComponent({texto}) {
  const cor = useContext(CorContext);
  return (
    <>
      <p style={{color: cor}}>{texto}</p>
    </>
  );
}

export default LabelComponent;