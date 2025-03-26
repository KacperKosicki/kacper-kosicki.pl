import React, { useState } from 'react';
import styles from './ClientForm.module.scss';

const ClientForm = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    pages: [],
    themeColors: [], // 👉 domyślny kolor
    font: 'Poppins',
    animations: 'medium',
    type: 'onepage',
    translations: ['pl'],
    newColor: '', // tymczasowe pole do wpisywania koloru
    showColorInfo: false, // 🔽 opis
    showSiteInfo: false, // 👈 dodaj to
    showPagesInfo: false, // ← nowa właściwość
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('pages.')) {
      const page = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        pages: {
          ...prev.pages,
          [page]: checked,
        },
      }));
    } else if (name === 'translations') {
      const options = Array.from(e.target.selectedOptions).map((opt) => opt.value);
      setFormData((prev) => ({ ...prev, translations: options }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/client-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || 'Konfiguracja zapisana!');
    } catch (err) {
      console.error(err);
      alert('Błąd zapisu konfiguracji');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.clientForm__container}>
      <h2 className={styles.clientForm__title}>🛠️ Konfiguruj swoją stronę</h2>
      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Nazwa projektu</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showSiteInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showSiteInfo: !prev.showSiteInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showSiteInfo && (
        <p className={styles.clientForm__infoText}>
          Wpisz roboczą nazwę projektu – np. „Strona firmy KOSICKI” lub „Portfolio – Ania Kowalska”.
          Ta nazwa pomoże w identyfikacji Twojej strony i może być wykorzystana przy dalszej komunikacji z administratorem.
        </p>
      )}

      <input
        type="text"
        name="siteName"
        value={formData.siteName}
        onChange={handleChange}
        required
        placeholder="np. twoja-strona.pl lub inna"
        className={styles.clientForm__input}
      />

      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Dodaj podstronę</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showPagesInfo ? styles.active : ''
            }`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showPagesInfo: !prev.showPagesInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showPagesInfo && (
        <p className={styles.clientForm__infoText}>
          Tutaj możesz dodać własne podstrony strony WWW – np. „o mnie”, „rezerwacja”, „opinie klientów”.
          Kliknij „Dodaj”, aby dodać je do listy. Możesz je też usunąć, zanim zapiszesz konfigurację. <br /><br />
          Nie ma problemu z dodaniem kolejnej podstrony również po zatwierdzeniu konfiguracji.
          Chodzi o to, żebym dokładnie wiedział, czego potrzebujesz, a Ty mógł na bieżąco śledzić moje postępy.
          To Ty decydujesz, jakie podstrony mają się pojawić – a po finalnym zatwierdzeniu projektu, który sam sobie skonfigurujesz,
          będziesz widział wszystkie zmiany i etapy realizacji swoich podstron.
        </p>
      )}

      <div className={styles.clientForm__pagesWrapper}>
        <input
          type="text"
          value={formData.newPage || ''}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newPage: e.target.value }))
          }
          placeholder="np. rezerwacja, blog, portfolio"
          className={styles.clientForm__input}
        />
        <button
          type="button"
          onClick={() => {
            const trimmed = formData.newPage?.trim();
            if (trimmed && !formData.pages.includes(trimmed)) {
              setFormData((prev) => ({
                ...prev,
                pages: [...prev.pages, trimmed],
                newPage: '',
              }));
            }
          }}
          className={styles.clientForm__addButton}
        >
          Dodaj
        </button>
      </div>

      {formData.pages.length > 0 && (
        <ul className={styles.clientForm__pagesList}>
          {formData.pages.map((page, idx) => (
            <li key={idx} className={styles.clientForm__pageItem}>
              {page}
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pages: prev.pages.filter((p) => p !== page),
                  }))
                }
                className={styles.clientForm__removeBtn}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.divider}></div>

      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Kolory strony</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showColorInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({ ...prev, showColorInfo: !prev.showColorInfo }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showColorInfo && (
        <p className={styles.clientForm__infoText}>
          Dodaj dowolną liczbę kolorów (np. główny, tło, akcenty). Możesz używać nazw kolorów (np. "red"),
          kodów HEX (np. "#4CAF50") lub RGB. Kolory zostaną wykorzystane do zaprojektowania Twojej strony.
        </p>
      )}

      <div className={styles.clientForm__pagesWrapper}>
        <div className={styles.clientForm__colorField}>
          <input
            type="text"
            placeholder="#4CAF50 lub red"
            value={formData.newColor}
            onChange={(e) => setFormData((prev) => ({ ...prev, newColor: e.target.value }))}
            className={styles.clientForm__inputWithColor}
          />
          <input
            type="color"
            value={formData.newColor}
            onChange={(e) => setFormData((prev) => ({ ...prev, newColor: e.target.value }))}
            className={styles.clientForm__colorInline}
          />
        </div>

        <button
          type="button"
          onClick={() => {
            const trimmed = formData.newColor?.trim();
            if (trimmed && !formData.themeColors.includes(trimmed)) {
              setFormData((prev) => ({
                ...prev,
                themeColors: [...prev.themeColors, trimmed],
                newColor: '',
              }));
            }
          }}
          className={styles.clientForm__addButton}
        >
          Dodaj
        </button>
      </div>

      {formData.themeColors.length > 0 && (
        <ul className={styles.clientForm__pagesList}>
          {formData.themeColors.map((color, idx) => (
            <li key={idx} className={styles.clientForm__pageItem}>
              <div
                style={{
                  backgroundColor: color,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '2px solid #ccc',
                }}
              />
              <span>{color}</span>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    themeColors: prev.themeColors.filter((c) => c !== color),
                  }))
                }
                className={styles.clientForm__removeBtn}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.divider}></div>

      <label className={styles.clientForm__label}>Czcionka:</label>
      <select
        name="font"
        value={formData.font}
        onChange={handleChange}
        className={styles.clientForm__select}
      >
        <option value="Poppins">Poppins</option>
        <option value="Roboto">Roboto</option>
        <option value="Montserrat">Montserrat</option>
      </select>

      <label className={styles.clientForm__label}>Ilość animacji:</label>
      <select
        name="animations"
        value={formData.animations}
        onChange={handleChange}
        className={styles.clientForm__select}
      >
        <option value="low">Mało</option>
        <option value="medium">Umiarkowanie</option>
        <option value="high">Dużo</option>
      </select>

      <label className={styles.clientForm__label}>Typ strony:</label>
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className={styles.clientForm__select}
      >
        <option value="onepage">One Page</option>
        <option value="classic">Klasyczne podstrony</option>
      </select>

      <label className={styles.clientForm__label}>Tłumaczenia:</label>
      <select
        name="translations"
        multiple
        onChange={handleChange}
        className={styles.clientForm__select}
      >
        <option value="pl">Polski</option>
        <option value="en">Angielski</option>
        <option value="de">Niemiecki</option>
        <option value="fr">Francuski</option>
      </select>

      <button type="submit" className={styles.clientForm__submit}>
        Zapisz konfigurację
      </button>
    </form>
  );
};

export default ClientForm;
