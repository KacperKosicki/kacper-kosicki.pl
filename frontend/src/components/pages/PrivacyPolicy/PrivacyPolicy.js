import React, { useContext } from 'react';
import styles from './PrivacyPolicy.module.scss';
import { LanguageContext } from '../../../context/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className={styles.privacyWrapper} data-aos="fade-up">
      <div className={styles.policyBox}>
        <h2>🔒 {t.privacyTitle}</h2>

        <p>{t.privacyIntro}</p>

        <h3>{t.privacyDataCollectedTitle}</h3>
        <ul>
          <li>{t.privacyDataCollected1}</li>
          <li>{t.privacyDataCollected2}</li>
        </ul>

        <h3>{t.privacyPurposeTitle}</h3>
        <ul>
          <li>{t.privacyPurpose1}</li>
          <li>{t.privacyPurpose2}</li>
        </ul>

        <h3>{t.privacyCookiesTitle}</h3>
        <p>{t.privacyCookiesIntro}</p>
        <ul>
          <li>{t.privacyCookies1}</li>
          <li>{t.privacyCookies2}</li>
          <li>{t.privacyCookies3}</li>
        </ul>
        <p>{t.privacyCookiesNote}</p>

        <h3>{t.privacyRightsTitle}</h3>
        <ul>
          <li>{t.privacyRight1}</li>
          <li>{t.privacyRight2}</li>
        </ul>

        <p className={styles.notice}>
          {t.privacyNotice} <a href="/contact">{t.contact}</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
