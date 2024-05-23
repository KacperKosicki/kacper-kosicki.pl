import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Portfolio.module.scss";
import { Carousel } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div>
      <Container>
        <div className={styles.portfolio}>
          <h2>Moje projekty:</h2>
          <div className={styles.googleInfo}>Oto prace, którymi chętnie mogę się pochwalić!</div>
        </div>
        <Carousel className={styles['custom-carousel']}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Pierwszy slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla pierwszego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Drugi slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla drugiego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Dodaj więcej slajdów w podobny sposób */}
      </Carousel>
      <Carousel className={styles['custom-carousel']}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Pierwszy slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla pierwszego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Drugi slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla drugiego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Dodaj więcej slajdów w podobny sposób */}
      </Carousel>
      <Carousel className={styles['custom-carousel']}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Pierwszy slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla pierwszego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Drugi slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla drugiego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Dodaj więcej slajdów w podobny sposób */}
      </Carousel>
      </Container>
    </div>
  );
};

export default Portfolio;
