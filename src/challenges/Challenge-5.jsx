import { useState } from "react";
import styles from "./Challenge-5.module.css";

export const Challenge5 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{count}</h1>

      <div className={styles.buttons}>
        <button>Decrementar</button>
        <button>Reiniciar</button>
        <button>Incrementar</button>
      </div>
    </div>
  );
};

export default Challenge5;
