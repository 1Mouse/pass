import React, { useEffect, useState } from 'react';
import styles from './blueCards.module.scss';

const BlueCards: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('blueCards');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.page}>
    <div className={styles.container} id="blueCards">
      <div  className={styles.cards}>

      <div className={`${styles.square} ${styles.linkedin} ${isVisible ? styles.visible : ''}`}>
        <span></span>
       
        <div className={styles.content}>
          <h2>Supercharge Your Interview Skills</h2>
          <p>you can supercharge your interview skills and gain a competitive edge. </p>
        
        </div>
      </div>

      <div className={`${styles.square} ${styles.twitter} ${isVisible ? styles.visible : ''}`}>
        <span></span>
    
        <div className={styles.content}>
          <h2>Unlock Your Potential with FAANG Engineers</h2>
          <p>Experience mock interviews with seasoned FAANG engineers and tap into their wealth of knowledge.</p>
         
        </div>
      </div>

      <div className={`${styles.square} ${styles.github} ${isVisible ? styles.visible : ''}`}>
        <span></span>
       
        <div className={styles.content}>
          <h2>Maximize Your Interview Success Rate</h2>
          <p>Increase your chances of interview success with Pass.</p>
         
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default BlueCards;
