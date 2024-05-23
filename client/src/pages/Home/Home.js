import React from 'react';
import styles from './Home.module.scss';
import { Container } from 'react-bootstrap';
import Skills from '../Skills/Skills';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
            <WelcomeSection />
        </Container>
      </header>
      <Skills />
    </>
  );
};

export default Home;

