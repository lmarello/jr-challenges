import styles from "./Challenge-1.module.css";

import { useState } from "react";

const countries = [
  {
    name: "Argentina",
    flag: "🇦🇷",
    continent: "America",
  },
  {
    name: "Brasil",
    flag: "🇧🇷",
    continent: "America",
  },
  {
    name: "Suiza",
    flag: "🇨🇭",
    continent: "Europe",
  },
  {
    name: "Alemania",
    flag: "🇩🇪",
    continent: "Europe",
  },
  {
    name: "Japon",
    flag: "🇯🇵",
    continent: "Asia",
  },
  {
    name: "Filipinas",
    flag: "🇵🇭",
    continent: "Asia",
  },
];

const Country = ({ name, flag }) => {
  return (
    <div className={styles.country}>
      <span>{flag}</span>
      <p>{name}</p>
    </div>
  );
};

export const Challenge1 = () => {
  return (
    <div>
      <Country name="Argentina" flag="🇦🇷" />
    </div>
  );
};
