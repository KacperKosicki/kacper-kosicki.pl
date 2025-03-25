import React, { useState } from 'react';
import styles from './ClientForm.module.scss';

const ClientForm = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    pages: {
      home: false,
      blog: false,
      contact: false,
      portfolio: false,
      booking: false,
    },
    themeColor: '#4CAF50',
    font: 'Poppins',
    animations: 'medium',
    type: 'onepage',
    translations: ['pl'],
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

      <label className={styles.clientForm__label}>Nazwa projektu:</label>
      <input
        type="text"
        name="siteName"
        value={formData.siteName}
        onChange={handleChange}
        required
        className={styles.clientForm__input}
      />

      <label className={styles.clientForm__label}>Wybierz podstrony:</label>
      {Object.keys(formData.pages).map((pageKey) => (
        <div key={pageKey}>
          <input
            type="checkbox"
            name={`pages.${pageKey}`}
            checked={formData.pages[pageKey]}
            onChange={handleChange}
          />
          <label>{pageKey}</label>
        </div>
      ))}

      <label className={styles.clientForm__label}>Kolor główny:</label>
      <input
        type="color"
        name="themeColor"
        value={formData.themeColor}
        onChange={handleChange}
        className={styles.clientForm__colorInput}
      />

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
