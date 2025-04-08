import React, { useContext, useEffect, useState } from "react";
import styles from "./RandomTip.module.scss";
import { LanguageContext } from "../../../context/LanguageContext";
import { FaLightbulb } from "react-icons/fa";

const RandomTip = () => {
  const { t } = useContext(LanguageContext);
  const tips = t.tipsArray; // tablica z tłumaczenia
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * tips.length));
  }, []);

  return (
    <section className={styles.tipBox} data-aos="zoom-in">
      <FaLightbulb className={styles.icon} />
      <p className={styles.text}>{tips[randomIndex]}</p>
    </section>
  );
};

export default RandomTip;
