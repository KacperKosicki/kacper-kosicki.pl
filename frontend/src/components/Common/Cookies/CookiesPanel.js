import React, { useEffect, useState } from 'react';
import styles from './CookiesPanel.module.scss';

const CookiesPanel = () => {
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
            setIsPanelOpen(false); // 👈 automatycznie ukrywa
        } else {
            setIsPanelOpen(true); // 👈 pokaż na starcie
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

        // 💾 Zapisz ustawienia do localStorage (żeby wróciły po odświeżeniu)
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
                    <h3>Twoje ustawienia cookies</h3>
                    <p>Używamy plików cookies, aby ulepszyć Twoje doświadczenie na stronie.</p>

                    <div className={styles.option}>
                        <label>
                            <input type="checkbox" checked disabled />
                            Niezbędne (zawsze aktywne)
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label>
                            <input
                                type="checkbox"
                                checked={consents.analytics}
                                onChange={() => handleConsentChange('analytics')}
                            />
                            Statystyczne (np. Google Analytics)
                        </label>
                    </div>

                    <div className={styles.option}>
                        <label>
                            <input
                                type="checkbox"
                                checked={consents.marketing}
                                onChange={() => handleConsentChange('marketing')}
                            />
                            Marketingowe (np. Facebook Pixel)
                        </label>
                    </div>

                    <button className={styles.acceptButton} onClick={handleAccept}>
                        Zapisz ustawienia
                    </button>
                </div>
            )}
        </div>
    );
};

export default CookiesPanel;
