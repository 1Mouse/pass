import Head from "next/head";
import Image from "next/image";
import styles from "./changeemail.module.scss";
import Skill from "../Choose";

function Changeemail() {
  return (
    <>
      <main>
        <div className={styles.changeemail}>
          <div className={styles.email}>
            <h4>Change Email:</h4>
            <input className={styles.input} type="text" placeholder="Email" />
          </div>
          <button className={styles.button}>save</button>
        </div>
      </main>
    </>
  );
}

export default Changeemail;
