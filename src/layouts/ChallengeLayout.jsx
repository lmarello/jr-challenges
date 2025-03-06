import styles from "./ChallengeLayout.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";

const ChallengeLayout = ({ challenge, goal, challengeId }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div className={styles.challengeContainer}>
      {/* Contenido principal del challenge */}
      <div className={styles.challengeContent}>{challenge}</div>

      {/* Footer con objetivo y selector de challenge */}
      <div className={styles.challengeGoalContainer}>
        <p className={styles.challengeGoalTitle}>Objetivo</p>
        <p className={styles.challengeGoal}>{goal}</p>

        {/* Selector de challenge en el footer */}
        <div className={styles.footerNavbar}>
          <label
            htmlFor="challenge-selector"
            className={styles.challengeGoalTitle}
          >
            Cambiar challenge
          </label>
          <select
            id="challenge-selector"
            className={styles.challengeSelector}
            onChange={handleChange}
            value={challengeId}
          >
            {routes.map(({ path, name }) => (
              <option key={path} value={path}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChallengeLayout;
