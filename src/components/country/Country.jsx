import styles from "./Country.module.css";

export const Country = ({ name, flag }) => {
  return (
    <div className={styles.country}>
      <span>{flag}</span>
      <p>{name}</p>
    </div>
  );
};
