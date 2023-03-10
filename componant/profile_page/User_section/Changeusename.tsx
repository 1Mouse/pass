import Head from "next/head";
import Image from "next/image";
import styles from "./changeusername.module.scss";

function Changeusename() {
  return (
    <>
      <main>
        <div className={styles.changeuser}>
          <div className={styles.user}>
            <h4>Change Username:</h4>
            <div className={styles.labelandinput}>
              <label htmlFor="UserName">set user name*</label>
            <input
            id="UserName"
              className={styles.input}
              type="text"
              placeholder="Username"
              />
          </div>
              </div>
          <button className={styles.button}>save</button>
        </div>
      </main>
    </>
  );
}

export default Changeusename;
