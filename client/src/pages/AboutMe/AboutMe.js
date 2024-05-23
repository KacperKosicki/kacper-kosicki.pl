// AboutMe.jsx

import React from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aboutMe}>
                <div className={styles.aboutHeader}>
                    <div className={styles.profileImage}>
                        <img src="images/kosa.jpg" alt="Zdjęcie profilowe" />
                    </div>
                    <h2 className={styles.heading}>O mnie</h2>
                </div>
                <p className={styles.text}>
                    Nazywam się Kacper Kosicki, mam 23 lata i ukończyłem Bootcamp Full Stack Developera. Kocham programować!
                </p>
                <p className={styles.text}>
                    Używam takich technologii jak HTML, CSS, RWD, Bootstrap, Git, JavaScript ES6, AJAX, Node.js, React, Express, Redux, MongoDB, Jira, WebSocket, Mongoose, npm, Webpack.
                </p>
                <p className={styles.extraInfo}>
                    Oprócz programowania, uwielbiam podróżować i grać w piłkę nożną. Mój cel to stałe doskonalenie się w dziedzinie programowania i stworzenie własnej aplikacji, która zmieni świat!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
