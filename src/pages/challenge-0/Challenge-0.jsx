import { useNavigate } from "react-router-dom";

import styles from "./Challenge-0.module.css";

export const Challenge0 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/challenge-1");
  };

  return (
    <div>
      <p>
        <span>🚀</span>
        <span className={styles.go}>VAMOS AL CHALLENGE 1</span>
      </p>
    </div>
  );
};
