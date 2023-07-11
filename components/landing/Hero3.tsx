import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './hero3.module.scss';

const Hero3 = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sectionOne = sectionOneRef?.current;
  //     const sectionTwo = sectionTwoRef?.current;
  //     const sectionThree = sectionThreeRef?.current;

  //     if (sectionOne) {
  //       const rectOne = sectionOne?.getBoundingClientRect();
  //       if (rectOne.top < window.innerHeight && rectOne.bottom >= 0) {
  //         sectionOne?.classList?.add(styles.animateSection);
  //       } else {
  //         sectionOne?.classList?.remove(styles.animateSection);
  //       }
  //     }

  //     if (sectionTwo) {
  //       const rectTwo = sectionTwo?.getBoundingClientRect();
  //       if (rectTwo.top < window.innerHeight && rectTwo.bottom >= 0) {
  //         sectionTwo?.classList?.add(styles.animateSection);
  //       } else {
  //         sectionTwo?.classList?.remove(styles.animateSection);
  //       }
  //     }

  //     if (sectionThree) {
  //       const rectThree = sectionThree?.getBoundingClientRect();
  //       if (rectThree.top < window.innerHeight && rectThree.bottom >= 0) {
  //         sectionThree?.classList?.add(styles.animateSection);
  //       } else {
  //         sectionThree.classList?.remove(styles.animateSection);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.section_head}>
          <h1 className={styles.title}>How it works</h1>
          {/* <p className={styles.subtitle}>This is the Hero3 component.</p> */}
        </div>
        <div data-aos="fade-right" className={`${styles.section_one}`} ref={sectionOneRef}>
          <h3 className={styles.sectionTitle}>Book Mock Interviews at Your Convenience:</h3>
          {/* <p className={styles.sectionContent}>This is the content of the first section1.</p> */}
          <div className={styles.card}>
            <div className={styles.card_content_one}>
              <Image src="/assets/undraw_booking_re_gw4j.svg" alt="Card Image 1" width={300} height={200} />
              <p className={styles.cardText}>Schedule mock interviews at a time that suits your schedule and availability.
  Choose from a variety of interview formats, such as coding interviews, system design interviews, or behavioral interviews.
  Enjoy the flexibility of booking sessions whenever you like, allowing you to practice and prepare at your own pace.</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className={`${styles.section_two}`} ref={sectionTwoRef}>
          <h3 className={styles.sectionTitle}>Connect with Senior Engineers from FAANG & Top Companies:</h3>
          <div className={styles.card}>
            <div className={styles.card_content_two}>
              <Image src="/assets/undraw_conference_call_b0w6.svg" alt="Card Image 2" width={300} height={200} />
              <p className={styles.cardText}>Engage in mock interviews conducted by experienced interviewers who are senior engineers from renowned companies, including FAANG and other top tech companies.
  Benefit from the insights and expertise of these professionals, who have extensive knowledge of the interview process and expectations at leading companies.</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className={`${styles.section_three}`} ref={sectionThreeRef}>
          <h3 className={styles.sectionTitle}>Work Towards Landing Your Dream Job:</h3>
          <div className={styles.card}>
            <div className={styles.card_content_three}>
              <Image src="/assets/undraw_investing_re_bov7.svg" alt="Card Image 3" width={300} height={200} />
              <p className={styles.cardText}>Utilize the feedback received to focus on specific areas and make targeted improvements.
  Continuously practice and refine your skills through repeated mock interviews.
  Leverage the guidance provided by senior engineers to increase your chances of securing the job you deserve.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;


































// const Hero3: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(styles.show);
//         }
//       });
//     });

//     if (sectionRef.current) {
//       sectionObserver.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         sectionObserver.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className={styles.page}>
//       <section ref={sectionRef} className={`${styles.block} ${styles.blockDark} ${styles.blockSkewedRight} ${styles.blockShowcase}`}>
//         <header className={styles.blockHeader}></header>
//         <div className={`${styles.container} ${styles.grid} ${styles.grid1x2}`}>
//           <div className={`${styles.blockShowcaseImage}`}>
//             <Image
//               src="/assets/howitwork.svg"
//               alt=""
//               layout="responsive"
//               width={600}
//               height={400}
//               className={styles.image}
//             />
//           </div>
//           <div className={styles.textContainer}>
//             <h2 className={styles.blockHeading}>How it works</h2>
//             <ul className={`${styles.list}`}>
//               <li className={`${styles.listItem} ${styles.show}`}>
//                 <div className={styles.media}>
//                   <div className={styles.mediaImage}>
//                     <svg className={`${styles.icon} ${styles.iconPrimary}`}>
//                       <use xlinkHref="images/sprite.svg#clock"></use>
//                     </svg>
//                   </div>
//                   <div className={styles.mediaBody}>
//                     <h3 className={styles.mediaTitle}>Book Mock Interviews at Your Convenience:</h3>
//                     <p>
//                     Schedule mock interviews at a time that suits your schedule and availability.
// Choose from a variety of interview formats, such as coding interviews, system design interviews, or behavioral interviews.
// Enjoy the flexibility of booking sessions whenever you like, allowing you to practice and prepare at your own pace.
//                     </p>
//                   </div>
//                 </div>
//               </li>
//               <li className={`${styles.listItem} ${styles.show}`}>
//                 <div className={styles.media}>
//                   <div className={styles.mediaImage}>
//                     <svg className={`${styles.icon} ${styles.iconPrimary}`}>
//                       <use xlinkHref="images/sprite.svg#growth"></use>
//                     </svg>
//                   </div>
//                   <div className={styles.mediaBody}>
//                     <h3 className={styles.mediaTitle}>Connect with Senior Engineers from FAANG & Top Companies:</h3>
//                     <p>
//                     Engage in mock interviews conducted by experienced interviewers who are senior engineers from renowned companies, including FAANG and other top tech companies.
// Benefit from the insights and expertise of these professionals, who have extensive knowledge of the interview process and expectations at leading companies.
//                     </p>
//                   </div>
//                 </div>
//               </li>
//               <li className={`${styles.listItem} ${styles.show}`}>
//                 <div className={styles.media}>
//                   <div className={styles.mediaImage}>
//                     <svg className={`${styles.icon} ${styles.iconPrimary}`}>
//                       <use xlinkHref="images/sprite.svg#wordpress"></use>
//                     </svg>
//                   </div>
//                   <div className={styles.mediaBody}>
//                     <h3 className={styles.mediaTitle}>Work Towards Landing Your Dream Job:</h3>
//                     <p>
//                     Utilize the feedback received to focus on specific areas and make targeted improvements.
// Continuously practice and refine your skills through repeated mock interviews.
// Leverage the guidance provided by senior engineers to increase your chances of securing the job you deserve.
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
  
// };

// export default Hero3;
