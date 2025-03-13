import React, { useState } from "react";
import { FaTools, FaDatabase, FaMobileAlt } from "react-icons/fa";
import styles from "./Portfolio.module.scss";

const projects = [
  {
    title: "Venezuelan Coffee House",
    description:
      "Venezuelan Coffee House to nowoczesna strona sklepu internetowego dla palarni kawy z Wenezueli. Projekt obejmuje trzy podstrony: Strona Główna, Produkty i Kontakt. Strona pobiera dane o produktach z API, posiada system dynamicznego przełączania podstron (SPA) oraz responsywny design dostosowany do urządzeń mobilnych.",
    features: [
      { icon: <FaTools />, text: "Dynamiczne pobieranie danych z API" },
      { icon: <FaDatabase />, text: "System zarządzania produktami" },
      { icon: <FaMobileAlt />, text: "Pełna responsywność" },
    ],
    technologies: ["JavaScript", "HTML", "CSS", "SASS", "JSON Server", "Handlebars"],
    github: "https://github.com/example/venezuelan-coffee",
    live: "https://venezuelan-coffee.example.com",
    images: [
      "/projects/project1.png",
      "/projects/project1-2.png",
      "/projects/project1-3.png",
    ],
  },
  {
    title: "Projekt 2",
    description: "Strona internetowa w Next.js zoptymalizowana pod SEO.",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/example/project2",
    live: "https://project2.example.com",
    images: [
      "/projects/project2-1.png",
      "/projects/project2-2.png",
      "/projects/project2-3.png",
      "/projects/project2-4.png",
      "/projects/project2-5.png",
      "/projects/project2-6.png",
      "/projects/project2-7.png",
      "/projects/project2-8.png",
    ],
  },
  {
    title: "Projekt 3",
    description: "System rezerwacji stworzony w Laravel i Vue.js.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    github: "https://github.com/example/project3",
    live: "https://project3.example.com",
    images: [
      "/projects/project3.jpg",
      "/projects/project3-1.jpg",
      "/projects/project3-2.jpg",
    ],
  },
];

const Portfolio = () => {
  const [openProject, setOpenProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

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
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
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
                  <button className={styles.viewGalleryButton} onClick={(e) => openLightbox(e, index)}>
                    📸 Zobacz galerię
                  </button>
                  <button className={styles.expandButton} onClick={() => toggleExpand(index)}>
                    {expandedProject === index ? "Zwiń opis" : "📖 Zobacz więcej"}
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
          ))}
        </div>

        {lightboxOpen && selectedImage && (
          <div className={styles.lightbox}>
            <div className={styles.lightboxContent}>

              {/* 🔹 Obrazek w lightboxie */}
              <img src={selectedImage} alt="Podgląd zdjęcia" className={styles.largePreview} />

              {/* 🔹 Kontener przycisków nawigacyjnych */}
              <div className={styles.lightboxControls}>
                <button className={styles.prevButton} onClick={prevImage}>
                  ⬅️ Poprzednie zdjęcie
                </button>
                <button className={styles.nextButton} onClick={nextImage}>
                  Następne zdjęcie ➡️
                </button>
              </div>

              <button className={styles.closeButton} onClick={closeLightbox}>
                ❌ Zamknij
              </button>

            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
