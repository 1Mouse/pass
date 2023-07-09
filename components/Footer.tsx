import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.calloutContainer}>
        <div className={styles.callout}>
          <div className={styles.calloutContent}>
            <div className={styles.callouttext}>

            <h2 className={styles.calloutHeading}>Ready to Get Started?</h2>
            <p>
            Join Pass today and take your interview preparation to the next level. Our platform is designed to empower you with the skills and confidence needed to succeed in technical interviews. 
            </p>
            </div>
            <a href="#" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnStretched}`}>
              Get Started
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <div className={styles.logo}>
            <Image
                        className={styles.logo}
                        src="assets/passLogo.svg"
                        alt=""
                        width={170}
                        height={57}
                    ></Image>
            </div>
            <div className={styles.copyRight}>
              &copy; {new Date().getFullYear()} pass
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.text}>
              <p>Thank you for visiting our pass </p>
              <p> Made with ❤ at Port Said University.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
