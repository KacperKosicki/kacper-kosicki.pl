import React, { useEffect, useState } from 'react';
import styles from './DeveloperMode.module.scss';

const DeveloperMode = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a',
    ];

    let pressedKeys = [];

    const handleKeyDown = (e) => {
      pressedKeys.push(e.key);
      if (pressedKeys.length > konamiCode.length) {
        pressedKeys.shift();
      }

      if (JSON.stringify(pressedKeys) === JSON.stringify(konamiCode)) {
        setActive(true);
        pressedKeys = [];
      }

      if (e.key === 'Escape') {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!active) return;

    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = '01'.split('');
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      });
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className={styles.devOverlay}>
      <canvas className={styles.canvas} id="matrixCanvas" />
      <div className={styles.overlayText}>💻 Developer Hardcore Mode Activated</div>
    </div>
  );
};

export default DeveloperMode;
