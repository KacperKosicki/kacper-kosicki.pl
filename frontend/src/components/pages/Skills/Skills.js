import React, { useContext } from "react";
import styles from "./Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faBootstrap,
  faNpm,
  faGitAlt,
  faJira,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCubes,
  faMobile,
  faServer,
  faDatabase,
  faCodeBranch,
  faNetworkWired,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../../context/LanguageContext";

const Skills = () => {
  const { t } = useContext(LanguageContext);

  const skills = [
    { icon: faHtml5, title: t.skillHtml, color: "#E34F26", description: t.skillHtmlDesc},
    { icon: faCss3, title: t.skillCss, color: "#1572B6", description: t.skillCssDesc},
    { icon: faMobile, title: t.skillRwd, color: "#FFA500", description: t.skillRwdDesc },
    { icon: faBootstrap, title: t.skillBootstrap, color: "#7952B3", description: t.skillBootstrapDesc },
    { icon: faNpm, title: t.skillNpm, color: "#CB3837", description: t.skillNpmDesc },
    { icon: faGitAlt, title: t.skillGit, color: "#F05032", description: t.skillGitDesc },
    { icon: faJs, title: t.skillJs, color: "#F7DF1E", description: t.skillJsDesc},
    { icon: faReact, title: t.skillReact, color: "#61DAFB", description: t.skillReactDesc },
    { icon: faCodeBranch, title: t.skillWebpack, color: "#8DD6F9", description: t.skillWebpackDesc },
    { icon: faDatabase, title: t.skillMongoDb, color: "#47A248", description: t.skillMongoDbDesc },
    { icon: faServer, title: t.skillMongoose, color: "#880000", description: t.skillMongooseDesc },
    { icon: faJira, title: t.skillJira, color: "#0052CC", description: t.skillJiraDesc },
    { icon: faNode, title: t.skillExpress, color: "#339933", description: t.skillExpressDesc },
    { icon: faCubes, title: t.skillAjax, color: "#F8981D", description: t.skillAjaxDesc },
    { icon: faNode, title: t.skillNode, color: "#339933", description: t.skillNodeDesc },
    { icon: faNetworkWired, title: t.skillWebsocket, color: "#444444", description: t.skillWebsocketDesc },
    { icon: faReact, title: t.skillRedux, color: "#764ABC", description: t.skillReduxDesc },
    { icon: faRobot, title: t.skillChatGPT, color: "#764ABC", description: t.skillChatGPTDesc },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2 data-aos="fade-up">⚙️ {t.skillsTitle}</h2>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div className={styles.skillCard} key={index} data-aos="fade-up">
            {skill.level && (
              <div className={styles.levelBadge}>{skill.level}</div>
            )}

            <FontAwesomeIcon icon={skill.icon} className={styles.icon} style={{ color: skill.color }} />
            <div className={styles.skillContent}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Skills;
