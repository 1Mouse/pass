// import React from 'react';
// import styles from './hero.module.scss';
// import Image from 'next/image';

// const Hero: React.FC = () => {
//   return (
//     <div>
//       <section id="hero" className={styles.block}>
//         <div className="container grid grid--1x2">
//           <header className={styles.heroContent}>
//             <h1 className={styles.heading}>Practice mock interviews with FAANG engineers</h1>
//             <p className={styles.tagLine}>
//               Get better at algorithms, systems design, and get detailed feedback about exactly what you need to work
//               on.
//             </p>
//           </header>
//           <div className={styles.heroImage}>
//             <div className={styles.imageContainer}>
//               <Image
//                 src="/assets/heroImage.svg"
//                 alt=""
//                 layout="fill"
//                 objectFit="cover"
//                 className={styles.image}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;










import styles from './hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={styles.block}>
            <div className="container grid grid--1x2">
                <header className={styles.heroContent}>
                    <h1 className={styles.heading}>Practice mock interviews with FAANG engineers</h1>
                    <p className={styles.tagLine}>Get better at algorithims, systems design and get detailed feedback about exactly what you need to work on.</p>
                    <Link
                        href="/login"
                        className={styles.getStarted}
                    >GET STARTED
                    </Link>
                </header>
                <div className={styles.heroImage}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/heroImage.svg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero