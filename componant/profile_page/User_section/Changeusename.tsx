import Head from "next/head";
import Image from "next/image";
import styles from "./changeusername.module.scss";
import Skill from "../choose/Choose";

function Changeusename() {
  return (
    <>
      <main>
        <div className={styles.changeuser}>
          <div className={styles.user}>
            <h4>Change Username:</h4>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
            />
          </div>
          <button className={styles.button}>save</button>
        </div>
      </main>
    </>
  );
}

export default Changeusename;
