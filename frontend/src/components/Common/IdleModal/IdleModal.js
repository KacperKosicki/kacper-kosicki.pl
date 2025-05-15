import React, { useEffect, useState, useContext } from 'react';
import styles from './IdleModal.module.scss';
import { LanguageContext } from '../../../context/LanguageContext';

const IdleModal = () => {
  const { t } = useContext(LanguageContext);
  const [showModal, setShowModal] = useState(false);
  const [fact, setFact] = useState('');
  let idleTimer;

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        const facts = t.idleModalFacts;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        setFact(randomFact);
        setShowModal(true);
      }, 30000); // ⏱️ 30 sekund bezczynności
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    resetTimer();

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [t]);

  const closeModal = () => setShowModal(false);

  if (!showModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>🧠 {t.idleModalTitle}</h3>
        <p>{t.idleModalSubtitle}</p>
        <p className={styles.funFact}>{fact}</p>
        <button onClick={closeModal}>{t.idleModalClose}</button>
      </div>
    </div>
  );
};

export default IdleModal;
