import React, { useState, useContext } from "react";
import styles from "./FAQ.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { LanguageContext } from "../../../context/LanguageContext"; // Import kontekstu języka

const FAQ = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { question: t.faqQuestion1, answer: t.faqAnswer1 },
    { question: t.faqQuestion2, answer: t.faqAnswer2 },
    { question: t.faqQuestion3, answer: t.faqAnswer3 },
  ];

  return (
    <section className={styles.faq}>
      <h2>❓{t.faqTitle}</h2>
      <div className={styles.questions}>
        {questions.map((item, index) => (
          <div key={index} className={styles.question}>
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {item.question} {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
