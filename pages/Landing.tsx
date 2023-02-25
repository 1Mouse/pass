import Link from "next/link";
import styles from "../styles/landing.module.scss";
import Image from "next/image";
import Navbarnew from "@/Components/common/NavbarNewUser";

export default function Landing() {
  return (
    <>
        <Navbarnew></Navbarnew>

    <div className={styles.landingpage}>
      
  <div className={styles.left_side}>
    <h1>Practice mock interviews with FAANG engineers</h1>
    <h5>
      Get better at algorithmic and systems design problems, and get
      detailed feedback on exactly what you need to work on.
    </h5>
    <button className={styles.getstarted}>Get started</button>
  </div>
  <div className={styles.right_side}>
    <Image
      src="/LandingPage.svg"
      alt="Interview Image"
      width={600}
      height={400}
      className={styles.image}
    />
  </div>
</div>

    </>
  );
}