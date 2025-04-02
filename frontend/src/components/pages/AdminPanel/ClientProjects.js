import React from 'react';
import styles from './ClientProjects.module.scss';

const ClientProjects = ({ projects }) => {
  return (
    <div className={styles.clientProjects} data-aos="fade-up">
      <h2 className={styles.title}>📁 Projekty klientów</h2>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project._id} className={styles.projectCard} data-aos="zoom-in">
            <h3>{project.siteName || 'Brak nazwy'}</h3>
            <p><strong>Klient:</strong> {project.userId?.email || 'Nieznany'}</p>
            <p><strong>Podstrony:</strong> {project.pages?.join(', ') || 'Brak'}</p>
            <p><strong>Kolory:</strong> {project.themeColors?.join(', ') || 'Brak'}</p>
            <p><strong>Czcionki:</strong> {project.fonts?.join(', ') || 'Brak'}</p>
            <p><strong>Wybrana czcionka główna:</strong> {project.font || 'Brak'}</p>
            <p><strong>Animacje:</strong> {project.animations}</p>
            <p><strong>Typ strony:</strong> {project.type}</p>
            <p><strong>Przeznaczenie:</strong> {project.purpose || 'Brak'}</p>
            <p><strong>Tłumaczenia:</strong> {project.translations?.join(', ') || 'Brak'}</p>
            <p><strong>Domena:</strong> {project.hasOwnDomain === 'yes' ? 'Ma domenę' : 'Potrzebuje domeny'}</p>
            {project.referenceSite && (
              <>
                <p><strong>Inspiracja:</strong> <a href={project.referenceSite} target="_blank" rel="noreferrer">{project.referenceSite}</a></p>
                <p><strong>Opis inspiracji:</strong> {project.referenceDescription}</p>
              </>
            )}
            <p><strong>Data utworzenia:</strong> {new Date(project.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientProjects;
