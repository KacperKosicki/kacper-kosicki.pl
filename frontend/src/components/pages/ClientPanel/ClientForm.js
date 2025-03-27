import React, { useState, useEffect } from 'react';
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
    purpose: '',
    showPurposeInfo: false,
    hasOwnDomain: '',
    showDomainInfo: false,
    hasReference: null,
    referenceSite: '',
    referenceDescription: '',
    fonts: [],
    fontsPreset: ['Poppins', 'Roboto', 'Montserrat', 'Open Sans', 'Raleway'],
    newFont: '',
    fontError: '',
  });

  const capitalizeEachWord = (str) =>
    str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  useEffect(() => {
    const fetchClientConfig = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/client-config', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Brak danych klienta');

        const data = await res.json();

        setFormData((prev) => ({
          ...prev,
          ...data, // dane z bazy (siteName, pages, themeColors itd.)
        }));
      } catch (err) {
        console.error('Błąd pobierania konfiguracji klienta:', err);
      }
    };

    fetchClientConfig();
  }, []);

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
    <form onSubmit={handleSubmit} className={styles.clientForm__container} data-aos="zoom-in">
      <h2 className={styles.clientForm__title}>🛠️ Konfiguruj swoją stronę</h2>
      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Typ strony</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showTypeInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showTypeInfo: !prev.showTypeInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showTypeInfo && (
        <p className={styles.clientForm__infoText}>
          <strong>One Page</strong> – nowoczesna, przewijana strona, gdzie menu kieruje do sekcji na tej samej stronie
          (np. <code>o mnie</code>, <code>usługi</code>, <code>kontakt</code>).
          <br /><br />
          Idealna dla portfolio, wizytówek, prostych stron firmowych. Jest szybka, czytelna i wygodna na urządzeniach mobilnych.
          <br /><br />
          Przykład strony typu One Page:
          <br />
          <a
            href="https://www.apple.com/airpods/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}
          >
            ➤ &nbsp;www.apple.com/airpods
          </a>
          <br /><br />
          <strong>Klasyczna strona</strong> – każda sekcja znajduje się na osobnej podstronie (np. <code>/kontakt</code>, <code>/oferta</code>, <code>/blog</code>).
          <br /><br />
          Lepszy wybór dla firm z rozbudowaną ofertą, blogami lub gdy zależy Ci na SEO dla każdej podstrony.
          <br /><br />
          Przykłady klasycznych stron:
          <br />
          <a
            href="https://www.wp.pl/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}
          >
            ➤ &nbsp;www.wp.pl
          </a>
          <br />
          <a
            href="https://kacper-kosicki.pl"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}
          >
            ➤ &nbsp;kacper-kosicki.pl
          </a>
        </p>
      )}

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className={styles.clientForm__select}
      >
        <option value="onepage">One Page</option>
        <option value="classic">Klasyczne podstrony</option>
      </select>

      <div className={styles.divider}></div>

      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Rodzaj strony / przeznaczenie</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showPurposeInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showPurposeInfo: !prev.showPurposeInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showPurposeInfo && (
        <p className={styles.clientForm__infoText}>
          Określenie przeznaczenia Twojej strony pomoże mi stworzyć projekt, który będzie idealnie dopasowany do jej roli.
          <br /><br />
          Inaczej zaprojektuję stronę dla firmy usługowej, inaczej dla sklepu internetowego, bloga czy portfolio.
          <br /><br />
          Wybierz typ, który najlepiej odzwierciedla Twoje potrzeby – możesz też zaznaczyć opcję „Inny typ”, jeśli masz mniej standardowy pomysł.
          <br /><br />
          Jeśli nie jesteś pewien, którą opcję wybrać – nie martw się, pomogę Ci to ustalić podczas dalszego kontaktu.
        </p>
      )}

      <select
        name="purpose"
        value={formData.purpose || ''}
        onChange={handleChange}
        className={styles.clientForm__select}
      >
        <option value="">-- Wybierz rodzaj strony --</option>
        <option value="business">Strona firmowa</option>
        <option value="portfolio">Portfolio</option>
        <option value="blog">Blog</option>
        <option value="landing">Landing Page (reklamowa)</option>
        <option value="store">Sklep / e-commerce</option>
        <option value="other">Inny typ</option>
      </select>

      <div className={styles.divider}></div>

      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>
          Czy masz gotową stronę, która może posłużyć jako inspiracja?
        </label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showReferenceInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showReferenceInfo: !prev.showReferenceInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showReferenceInfo && (
        <p className={styles.clientForm__infoText}>
          Jeśli widziałeś stronę (Twoją lub cudzą), która posiada elementy, które Ci się podobają – np. układ sekcji, menu, animacje, kolorystykę, typografię lub styl ogólny – koniecznie podziel się jej adresem.
          <br /><br />
          Jeśli masz inspirację to w polu poniżej wpisz link do strony oraz krótko opisz, co dokładnie Cię w niej zainteresowało. Może to być np. przejrzystość, nowoczesne animacje, styl nagłówka lub rozmieszczenie treści.
          <br /><br />
          Taka inspiracja pozwoli mi jeszcze lepiej dopasować projekt do Twoich oczekiwań.
        </p>
      )}

      <div className={styles.clientForm__radioGroup}>
        <label>
          <input
            type="radio"
            name="hasReference"
            checked={formData.hasReference === true}
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                hasReference: true,
              }))
            }
          />{' '}
          Tak, mam inspirację
        </label>
        <label>
          <input
            type="radio"
            name="hasReference"
            value={false}
            checked={formData.hasReference === false}
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                hasReference: false,
                referenceSite: '',
                referenceDescription: '',
              }))
            }
          />{' '}
          Nie mam konkretnej inspiracji
        </label>
      </div>

      {formData.hasReference && (
        <>
          <label className={styles.clientForm__label}>Link do strony inspirującej:</label>
          <input
            type="url"
            name="referenceSite"
            value={formData.referenceSite}
            onChange={handleChange}
            className={styles.clientForm__input}
            placeholder="np. https://strona-inspiracja.pl"
          />

          <label className={styles.clientForm__label}>Co Ci się na niej podoba? (układ, kolory, styl...)</label>
          <textarea
            name="referenceDescription"
            value={formData.referenceDescription}
            onChange={handleChange}
            className={styles.clientForm__input}
            placeholder="np. podoba mi się przejrzystość, duże przyciski, kolorystyka oraz menu w górnej części."
            rows={3}
          />
        </>
      )}

      <div className={styles.divider}></div>

      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Czy posiadasz własną domenę?</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showDomainInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showDomainInfo: !prev.showDomainInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showDomainInfo && (
        <p className={styles.clientForm__infoText}>
          Jeśli posiadasz już swoją domenę (np. moja-firma.pl), świetnie – będzie można ją łatwo podpiąć do nowej strony.
          <br /><br />
          Jeśli jeszcze jej nie masz, zdecydowanie rekomenduję, abyś zarejestrował ją we własnym zakresie. Dzięki temu będziesz mieć pełną kontrolę nad swoją marką, adresem strony i przyszłym rozwojem biznesu.
          <br /><br />
          Oczywiście, mogę doradzić w wyborze i pokierować Cię krok po kroku, ale nie pośredniczę w zakupie domen – powinno to być wykonane przez Ciebie jako właściciela strony.
        </p>
      )}

      <div className={styles.clientForm__radioGroup}>
        <label>
          <input
            type="radio"
            name="hasOwnDomain"
            value="yes"
            checked={formData.hasOwnDomain === 'yes'}
            onChange={handleChange}
          />
          Tak, mam domenę
        </label>
        <label>
          <input
            type="radio"
            name="hasOwnDomain"
            value="no"
            checked={formData.hasOwnDomain === 'no'}
            onChange={handleChange}
          />
          Nie, potrzebuję pomocy z domeną
        </label>
      </div>

      <div className={styles.divider}></div>

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
          Podaj roboczą nazwę swojego projektu – np. <strong>„Strona firmy KOSICKI”</strong> lub <strong>„Portfolio – Ania Kowalska”</strong>.
          <br /><br />
          Nazwa ta będzie wykorzystywana wewnętrznie do identyfikacji Twojej strony oraz przy komunikacji z administratorem. Może również pojawić się np. w tytule panelu klienta lub w wiadomościach e‑mail związanych z projektem.
          <br /><br />
          Nie martw się – tę nazwę będzie można później zmienić.
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

      <div className={styles.divider}></div>

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
          Kliknij „Dodaj”, aby dodać je do listy. Możesz je też usunąć, zanim zapiszesz konfigurację.
          <br /><br />
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
          Możesz dodać dowolną liczbę kolorów, które zostaną wykorzystane podczas projektowania Twojej strony – np. kolor główny, tło, akcenty itp.
          <br /><br />
          Wpisz nazwę koloru (<code>red</code>, <code>blue</code>), kod HEX (<code>#4CAF50</code>), lub RGB (<code>rgb(255, 0, 0)</code>).
          <br /><br />
          Po prawej stronie znajdziesz również wbudowaną paletę – możesz z niej skorzystać, klikając wybrany kolor. Zostanie on automatycznie wpisany do pola, gotowy do dodania.
          <br /><br />
          Jeśli nie jesteś pewny, jakie kolory wybrać – skorzystaj z gotowych palet online.
          <br /><br />
          <a
            href="https://coolors.co/palettes/trending"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}
          >
            ➤ &nbsp;Coolors – trendy palety kolorów
          </a>
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

      <div className={styles.clientForm__labelWithToggle}>
        <label className={styles.clientForm__label}>Czcionki na stronie</label>
        <button
          type="button"
          className={`${styles.clientForm__toggleButton} ${formData.showFontInfo ? styles.active : ''}`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              showFontInfo: !prev.showFontInfo,
            }))
          }
          aria-label="Pokaż opis"
        >
          ▼
        </button>
      </div>

      {formData.showFontInfo && (
        <p className={styles.clientForm__infoText}>
          Zaznacz jedną lub kilka czcionek, które chcesz użyć na stronie. Możesz też dodać własną nazwę czcionki z Google Fonts (np. „Lato”).
          <br /><br />
          Czcionki będą używane w nagłówkach, treści oraz przyciskach. Zobacz przykładowy wygląd każdej z nich przed wyborem.
          <br /><br />
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}
          >
            ➤ &nbsp;Otwórz Google Fonts
          </a>
        </p>
      )}

      <div className={styles.clientForm__fontOptions}>
        {[...formData.fontsPreset || ['Poppins', 'Roboto', 'Montserrat', 'Open Sans', 'Raleway']].map((font) => (
          <label key={font} className={styles.clientForm__fontItem}>
            <input
              type="checkbox"
              value={font}
              checked={formData.fonts?.includes(font)}
              onChange={(e) => {
                const checked = e.target.checked;
                setFormData((prev) => ({
                  ...prev,
                  fonts: checked
                    ? [...(prev.fonts || []), font]
                    : prev.fonts.filter((f) => f !== font),
                }));
              }}
            />
            <span style={{ fontFamily: font }}>Przykład: "Nowoczesna czcionka {font}"</span>
          </label>
        ))}
      </div>

      <div className={styles.clientForm__customFont}>
        <label className={styles.clientForm__label}>Dodaj własną czcionkę:</label>
        <div className={styles.clientForm__fontAddRow}>
          <input
            type="text"
            placeholder="Np. Lato, Inter, Playfair Display"
            value={formData.newFont || ''}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                newFont: e.target.value,
                fontError: '',
              }))
            }
            className={styles.clientForm__input}
          />
          <button
            type="button"
            className={styles.clientForm__addButton}
            onClick={async () => {
              const font = capitalizeEachWord(formData.newFont?.trim());
              if (!font) return;

              if ((formData.fonts || []).includes(font)) {
                setFormData((prev) => ({
                  ...prev,
                  fontError: 'Ta czcionka została już dodana.',
                }));
                return;
              }

              // Załaduj czcionkę z Google Fonts
              const fontUrl = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}&display=swap`;

              try {
                const response = await fetch(fontUrl);
                if (!response.ok) throw new Error();

                const link = document.createElement('link');
                link.href = fontUrl;
                link.rel = 'stylesheet';
                document.head.appendChild(link);

                setFormData((prev) => ({
                  ...prev,
                  fonts: [...(prev.fonts || []), font],
                  newFont: '',
                  fontError: '',
                }));
              } catch (err) {
                setFormData((prev) => ({
                  ...prev,
                  fontError: 'Nie znaleziono takiej czcionki w Google Fonts.',
                }));
              }
            }}
          >
            Dodaj
          </button>
        </div>

        {formData.fontError && (
          <p className={styles.clientForm__errorText}>{formData.fontError}</p>
        )}

        {formData.fonts?.length > 0 && (
          <ul className={styles.clientForm__pagesList}>
            {formData.fonts.map((font, idx) => (
              <li key={idx} className={styles.clientForm__fontItem}>
                <div style={{ fontFamily: `'${font}', sans-serif` }}>
                  <strong>{font}:</strong> Przykładowy tekst z tą czcionką.
                </div>
                <button
                  type="button"
                  className={styles.clientForm__removeBtn}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      fonts: prev.fonts.filter((f) => f !== font),
                    }))
                  }
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.divider}></div>

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
