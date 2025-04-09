import React, { useState } from 'react';
import styles from './ToolsToggle.module.scss';
import { FiTool, FiMessageCircle } from 'react-icons/fi';
import { FaCookieBite, FaCircle } from 'react-icons/fa'; // ✅ dodajemy FaCircle

const ToolsToggle = ({ onToggleChatbot, onToggleCookies, isChatbotVisible, isCookiesVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.toolsToggle}>
      <button className={styles.mainButton} onClick={() => setOpen(!open)}>
        <FiTool />
      </button>

      {open && (
        <div className={styles.menu}>
          <button className={styles.toggleButton} onClick={onToggleChatbot}>
            <FiMessageCircle />
            ChatBot
            <FaCircle
              className={styles.statusIcon}
              color={isChatbotVisible ? 'limegreen' : 'crimson'}
              size={10}
            />
          </button>

          <button className={styles.toggleButton} onClick={onToggleCookies}>
            <FaCookieBite />
            Cookies
            <FaCircle
              className={styles.statusIcon}
              color={isCookiesVisible ? 'limegreen' : 'crimson'}
              size={10}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToolsToggle;
