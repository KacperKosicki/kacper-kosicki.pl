import React, { useState } from "react";
import { FaTools, FaDatabase, FaMobileAlt } from "react-icons/fa";
import styles from "./Portfolio.module.scss";

const projects = [
  {
    title: "Venezuelan Coffee House | Projekt indywidualny",
    description:
      "Venezuelan Coffee House to nowoczesna strona sklepu internetowego dla palarni kawy z Wenezueli. Projekt obejmuje trzy podstrony: Strona Główna, Produkty i Kontakt. Strona pobiera dane o produktach z API, posiada system dynamicznego przełączania podstron (SPA) oraz responsywny design dostosowany do urządzeń mobilnych.",
    features: [
      { icon: <FaTools />, text: "Dynamiczne pobieranie danych z API" },
      { icon: <FaDatabase />, text: "System zarządzania produktami" },
      { icon: <FaMobileAlt />, text: "Pełna responsywność" },
    ],
    technologies: ["JavaScript", "HTML", "CSS", "SASS", "JSON Server", "Handlebars"],
    images: [
      `${process.env.PUBLIC_URL}/projects/project1-1.png`,
      `${process.env.PUBLIC_URL}/projects/project1-2.png`,
      `${process.env.PUBLIC_URL}/projects/project1-3.png`,
    ],
    category: "kurs", // lub: "strona", "własne"
    disabled: false, // ← nowa flaga
  },
  {
    title: "Bazar Online Shopping | Projekt zespołowy",
    description: "Projekt grupowy symulujący realną pracę na stanowisku Junior Web Developera. Aplikacja e-commerce zbudowana w Next.js i Tailwind CSS, z naciskiem na organizację zespołową, pracę z Jirą, repozytorium Git oraz komunikację w zespole.",
    technologies: ["Next.js", "Tailwind CSS", "GitHub", "Jira", "SCRUM", "Kanban", "React Icons"],
    images: [
      `${process.env.PUBLIC_URL}/projects/project2-1.png`,
      `${process.env.PUBLIC_URL}/projects/project2-2.png`,
      `${process.env.PUBLIC_URL}/projects/project2-3.png`,
      `${process.env.PUBLIC_URL}/projects/project2-4.png`,
      `${process.env.PUBLIC_URL}/projects/project2-5.png`,
      `${process.env.PUBLIC_URL}/projects/project2-6.png`,
      `${process.env.PUBLIC_URL}/projects/project2-7.png`,
      `${process.env.PUBLIC_URL}/projects/project2-8.png`,
    ],
    category: "kurs",
    disabled: false, // ← nowa flaga
  },
  {
    title: "Projekt w trakcie konfiguracji...",
    description: "-",
    technologies: ["-"],
    github: "https://github.com/example/project3",
    live: "https://project3.example.com",
    images: [
      `${process.env.PUBLIC_URL}/projects/project3-1.png`,
    ],
    category: "kurs", // lub: "strona", "własne"
    disabled: true, // ← nowa flaga
  },
  {
    title: "Projekt w trakcie konfiguracji...",
    description: "-",
    technologies: ["-"],
    images: [
      `${process.env.PUBLIC_URL}/projects/project4-1.png`,
      `${process.env.PUBLIC_URL}/projects/project4-2.png`,
      `${process.env.PUBLIC_URL}/projects/project4-3.png`,
      `${process.env.PUBLIC_URL}/projects/project4-4.png`,
      `${process.env.PUBLIC_URL}/projects/project4-5.png`,
      `${process.env.PUBLIC_URL}/projects/project4-6.png`,
    ],
    category: "kurs", // lub: "strona", "własne"
    disabled: true, // ← nowa flaga
  },
  {
    title: "Projekt w trakcie konfiguracji...",
    description: "-",
    technologies: ["-"],
    images: [
      `${process.env.PUBLIC_URL}/projects/project5-1.png`,
      `${process.env.PUBLIC_URL}/projects/project5-2.png`,
    ],
    category: "kurs", // lub: "strona", "własne"
    disabled: true, // ← nowa flaga
  },
];

const Portfolio = () => {
  const [openProject, setOpenProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProjects = projects
    .filter(p => selectedCategory ? p.category === selectedCategory : true)
    .sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      return 0;
    });

  const toggleGallery = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  const openLightbox = (e, projectIndex, imageIndex = 0) => {
    e.stopPropagation();
    setSelectedProjectIndex(projectIndex);
    setSelectedImage(projects[projectIndex].images[imageIndex]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    setSelectedProjectIndex(null);
  };

  const nextImage = () => {
    if (selectedProjectIndex !== null) {
      const images = projects[selectedProjectIndex].images;
      const currentIndex = images.indexOf(selectedImage);
      setSelectedImage(images[(currentIndex + 1) % images.length]);
    }
  };

  const prevImage = () => {
    if (selectedProjectIndex !== null) {
      const images = projects[selectedProjectIndex].images;
      const currentIndex = images.indexOf(selectedImage);
      setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    }
  };

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <section className={styles.portfolio} id="portfolio">
        <h2 data-aos="fade-up">📦 Moje projekty</h2>
        <div className={styles.filters} data-aos="fade-up">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Wszystkie kategorie</option>
            <option value="strona">Projekty stron</option>
            <option value="kurs">Projekty kursu</option>
            <option value="własne">Projekty własne</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Domyślnie</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
        <div className={styles.projectGrid}>
          {filteredProjects.length === 0 ? (
            <div className={styles.noProjects}>
              😔 Przepraszamy, w tej kategorii nie znaleziono żadnych projektów
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div key={index} className={styles.projectCard} data-aos="zoom-in">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={styles.previewImage}
                  onClick={() => toggleGallery(index)}
                />
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  {/* 🔹 Technologie */}
                  <div className={styles.techSection}>
                    <h4 className={styles.techTitle}>🛠️ Zastosowane technologie:</h4>
                    <div className={styles.techStack}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* 🔹 Przyciski akcji */}
                  <div className={styles.actions}>
                    <button
                      className={styles.viewGalleryButton}
                      onClick={project.disabled ? null : (e) => openLightbox(e, index)}
                      disabled={project.disabled}
                      title={project.disabled ? "Projekt w trakcie konfiguracji" : ""}
                    >
                      Zobacz galerię
                    </button>

                    <button
                      className={styles.expandButton}
                      onClick={project.disabled ? null : () => toggleExpand(index)}
                      disabled={project.disabled}
                      title={project.disabled ? "Projekt w trakcie konfiguracji" : ""}
                    >
                      {expandedProject === index ? "Zwiń opis" : "Zobacz więcej"}
                    </button>
                  </div>

                  {/* 🔹 Rozszerzony opis */}
                  {expandedProject === index && (
                    <div className={styles.expandedContent}>
                      <p><strong>Rozszerzony opis:</strong> Ten projekt został zbudowany jako część kursu Full Stack Developer. Strona działa jako Single Page Application (SPA), umożliwiając płynne przełączanie między podstronami bez przeładowywania.</p>
                      <p><strong>Główne funkcje:</strong> Pobieranie produktów z API, dynamiczne renderowanie za pomocą Handlebars, semantyczny kod HTML dla lepszego SEO.</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {lightboxOpen && selectedImage && (
          <div className={styles.lightbox}>
            <div className={styles.lightboxContent}>

              {/* 🔹 Obrazek w lightboxie */}
              <img src={`${selectedImage}`} alt="Podgląd zdjęcia" className={styles.largePreview} />

              {/* 🔹 Kontener przycisków nawigacyjnych */}
              <div className={styles.lightboxControls}>
                <button className={styles.prevButton} onClick={prevImage}>
                  Poprzednie zdjęcie
                </button>
                <button className={styles.nextButton} onClick={nextImage}>
                  Następne zdjęcie
                </button>
              </div>

              <button className={styles.closeButton} onClick={closeLightbox}>
                Zamknij
              </button>

            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
