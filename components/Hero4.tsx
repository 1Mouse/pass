import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../components/hero4.module.scss';




const Hero4 = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          resetAnimation(entry.target);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const resetAnimation = (target) => {
    const linePath = target.querySelector(`.${styles.card__line}`);
    const contentElement = target.querySelector(`.${styles.card__content}`);

    linePath.style.animation = 'none';
    contentElement.style.animation = 'none';

    // Trigger reflow to restart the animation
    void linePath.offsetWidth;
    void contentElement.offsetWidth;

    linePath.style.animation = null;
    contentElement.style.animation = null;
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.hidden}`} ref={cardRef}>
      <div>

        <div className={`${styles['card__text-container']} ${styles.hidden}`}>
        <p className={styles['card__title']}>Join Pass today and unlock a world of possibilities!</p>
          <p className={styles['card__paragraph']}>Whether you're a job seeker or an employer, we're here to help you navigate the ever-evolving landscape of talent acquisition. Your next career move or perfect hire is just a click away.

</p>
          
        </div>
        <div>

        <svg className={`${styles.card__svg} ${styles.hidden}`} viewBox="0 0 800 500">
          {/* <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="transparent"
            fill="#333"
          ></path> */}
          <path
            className={`${styles['card__line']} ${styles.hidden}`}
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="3"
            fill="transparent"
          ></path>
        </svg>
        </div>

        </div>
        <div className={`${styles['card__content']} ${styles.hidden}`}>
          
          <button className={styles['card__button']}>Get Started</button> {/* Add the button */}
        </div>
      </div>
    </div>
  );
  
};

export default Hero4;
