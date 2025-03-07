import styles from "./ChallengeLayout.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { useEffect, useState } from "react";

const ChallengeLayout = ({ challengeComponent, goal }) => {
  const location = useLocation();
  const [selectedChallenge, setSelectedChallenge] = useState(routes[0].path);

  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedChallenge(currentPath);
  }, [setSelectedChallenge, location.pathname]);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className={styles.challengeSelectorContainer}>
        {routes.map(({ path, name }) => (
          <span
            key={path}
            onClick={() => handleClick(path)}
            className={
              path === selectedChallenge
                ? styles.challengeSelected
                : styles.challenge
            }
          >
            {name}
          </span>
        ))}
      </div>
      <div className={styles.challengeContainer}>
        <div className={styles.challengeContent}>{challengeComponent}</div>

        <div className={styles.challengeGoalContainer}>
          <p className={styles.challengeGoalTitle}>Objetivo</p>
          <p className={styles.challengeGoal}>
            {goal.split("|").map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChallengeLayout;
