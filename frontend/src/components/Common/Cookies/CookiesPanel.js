import React, { useEffect, useState, useContext } from 'react';
import styles from './CookiesPanel.module.scss';
import { LanguageContext } from '../../../context/LanguageContext';

const CookiesPanel = () => {
  const { t } = useContext(LanguageContext);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [consents, setConsents] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsents');
    if (stored) {
      setConsents(JSON.parse(stored));
      setIsPanelOpen(false);
    } else {
      setIsPanelOpen(true);
    }
  }, []);

  const handleConsentChange = (type) => {
    if (type !== 'necessary') {
      setConsents((prev) => ({ ...prev, [type]: !prev[type] }));
    }
  };

  const handleAccept = () => {
    document.cookie = `cookie_analytics=${consents.analytics}; path=/; max-age=31536000`;
    document.cookie = `cookie_marketing=${consents.marketing}; path=/; max-age=31536000`;
    document.cookie = `cookie_necessary=true; path=/; max-age=31536000`;

    localStorage.setItem('cookieConsents', JSON.stringify(consents));
    setIsPanelOpen(false);
  };

  return (
    <div className={styles.cookiesPanel}>
      <button className={styles.toggleButton} onClick={() => setIsPanelOpen(!isPanelOpen)}>
        🍪
      </button>

      {isPanelOpen && (
        <div className={styles.panel}>
          <h3>{t.cookiesTitle}</h3>
          <p>{t.cookiesDescription}</p>

          <div className={styles.option}>
            <label>
              <input type="checkbox" checked disabled />
              {t.cookiesNecessary}
            </label>
          </div>

          <div className={styles.option}>
            <label>
              <input
                type="checkbox"
                checked={consents.analytics}
                onChange={() => handleConsentChange('analytics')}
              />
              {t.cookiesAnalytics}
            </label>
          </div>

          <div className={styles.option}>
            <label>
              <input
                type="checkbox"
                checked={consents.marketing}
                onChange={() => handleConsentChange('marketing')}
              />
              {t.cookiesMarketing}
            </label>
          </div>

          <button className={styles.acceptButton} onClick={handleAccept}>
            {t.cookiesSave}
          </button>
        </div>
      )}
    </div>
  );
};

export default CookiesPanel;
