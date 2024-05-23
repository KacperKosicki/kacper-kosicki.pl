import React from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faReact, faJira, faNpm, faGithub, faJs, faNode, faMdb } from '@fortawesome/free-brands-svg-icons'; // Importuj ikony, których używasz
import { faCode, faDatabase, faMobileAlt, faRobot } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  {
    icon: faHtml5,
    title: 'HTML',
    description: 'Eksploruję świat HTML! Uczę się tworzyć podstawowe strony internetowe i staram się zrozumieć tagi i ich znaczenia.',
  },
  {
    icon: faCss3,
    title: 'CSS / SCSS',
    description: 'Pływam w kaskadach stylów! Uczę się nadawać kolorystykę, układ i trochę animacji moim projektom stron internetowych.',
  },
  {
    icon: faMobileAlt,
    title: 'RWD',
    description: 'Wchodzę w świat responsywnego projektowania stron! Dopasowuję wygląd i układ moich stron do różnych urządzeń, zapewniając spójne doświadczenie dla wszystkich użytkowników, niezależnie od tego, czy korzystają z komputera, tabletu czy telefonu.'
  },
  {
    icon: faBootstrap,
    title: 'Bootstrap',
    description: 'Wkraczam do świata Bootstrapa! Wykorzystuję gotowe komponenty i siatkę Bootstrapa, aby szybko i sprawnie projektować responsywne i atrakcyjne strony internetowe. Dzięki Bootstrapowi oszczędzam czas i mogę skupić się na tworzeniu wartościowych treści i funkcji dla moich użytkowników.'
  },
  {
    icon: faGithub,
    title: 'GIT',
    description: 'Wkraczam do świata GIT! Uczę się używać systemu kontroli wersji GIT, który pozwala mi skutecznie zarządzać kodem źródłowym moich projektów. Dzięki GIT mogę śledzić zmiany, pracować zespołowo i bezpiecznie przechowywać moje pliki projektowe.'
  },
  {
    icon: faJs,
    title: 'JavaScript',
    description: 'Zaczynam odkrywać tajemnice JavaScript! Uczę się podstaw programowania, aby móc tworzyć interaktywne elementy na moich stronach.',
  },
  {
    icon: faDatabase,
    title: 'AJAX',
    description: 'Zanurzam się w świecie AJAX! Uczę się wykorzystywać technologię AJAX do dynamicznego ładowania treści na moich stronach internetowych bez konieczności odświeżania całej strony.',
  },
  {
    icon: faNode,
    title: 'Node',
    description: 'Zanurzam się w Node.js! Uczę się wykorzystywać środowisko Node.js do tworzenia skalowalnych aplikacji internetowych i serwerów, wszystko za pomocą JavaScriptu.',
  },
  {
    icon: faReact,
    title: 'React',
    description: 'Wkraczam w świat Reacta! Uczę się wykorzystywać bibliotekę React do tworzenia dynamicznych interfejsów użytkownika w aplikacjach internetowych, co pozwala mi tworzyć interaktywne komponenty w sposób wydajny i modułowy.',
  },
  {
    icon: faCode,
    title: 'Express',
    description: 'Wkraczam w świat Express! Uczę się wykorzystywać framework Express.js do tworzenia szybkich, niezawodnych i skalowalnych aplikacji internetowych w języku JavaScript, zarówno po stronie serwera, jak i klienta.',
  },
  {
    icon: faCode,
    title: 'Redux',
    description: 'Wkraczam w świat Redux! Uczę się wykorzystywać bibliotekę Redux do zarządzania stanem aplikacji w sposób przejrzysty i efektywny, co pozwala mi łatwiej kontrolować dane i stan moich projektów.',
  },
  {
    icon: faMdb,
    title: 'MongoDB',
    description: 'Wkraczam w świat MongoDB! Uczę się wykorzystywać bazę danych MongoDB do przechowywania i zarządzania danymi w aplikacjach internetowych, co pozwala mi tworzyć skalowalne i elastyczne rozwiązania.',
  },
  {
    icon: faJira,
    title: 'Jira',
    description: 'Wkraczam w świat Jiry! Uczę się wykorzystywać narzędzie Jira do zarządzania projektami i śledzenia zadań w sposób efektywny i zorganizowany, co pozwala mi lepiej kontrolować postęp moich projektów.',
  },
  {
    icon: faCode,
    title: 'WebSocket',
    description: 'Wkraczam w świat WebSocket! Uczę się wykorzystywać technologię WebSocket do tworzenia interaktywnych aplikacji internetowych, co pozwala mi na szybką i bezproblemową komunikację w czasie rzeczywistym między klientem a serwerem.',
  },
  {
    icon: faMdb,
    title: 'Mongoose',
    description: 'Wkraczam w świat Mongoose! Uczę się wykorzystywać bibliotekę Mongoose do modelowania danych i interakcji z bazą danych MongoDB w sposób wydajny i intuicyjny, co pozwala mi tworzyć solidne aplikacje internetowe oparte na Node.js i MongoDB.',
  },
  {
    icon: faNpm,
    title: 'NPM',
    description: 'Wkraczam w świat NPM! Uczę się wykorzystywać menedżer pakietów NPM do zarządzania zależnościami i bibliotekami w moich projektach, co pozwala mi szybko instalować, aktualizować i zarządzać pakietami JavaScriptowych narzędzi i bibliotek.',
  },
  {
    icon: faCode,
    title: 'Webpack',
    description: 'Wkraczam w świat Webpack! Uczę się wykorzystywać narzędzie Webpack do budowania i pakowania moich aplikacji internetowych, co pozwala mi efektywnie zarządzać zależnościami, optymalizować kod oraz generować pliki wynikowe gotowe do wdrożenia na serwerze.',
  },
  {
    icon: faRobot,
    title: 'ChatGPT',
    description: 'x',
  },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>Dlaczego ja?</h2>
      <div className={styles.technologyInfo}>Oto technologie, dzięki którym mogę w pełni pisać swoje rozbudowane projekty!</div>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill, index) => (
          <div className={`${styles.skillItem} ${index % 3 === 2 ? styles.newRow : ''}`} key={index}>
            <FontAwesomeIcon icon={skill.icon} className={styles.icon} />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
