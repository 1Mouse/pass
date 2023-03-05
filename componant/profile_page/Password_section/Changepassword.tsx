import Head from "next/head";
import Image from "next/image";
import styles from "./changepassword.module.scss";
import Skill from "../Choose";
import Link from "next/link";

function Changepassword() {
  return (
    <>
      <main>
        <div className={styles.changepassword}>
          <h4>Pass Word:</h4>
          <div className={styles.inputsendbutton}>
            <div className={styles.inputs}>

              <div className={styles.input}>
                <input type="password" placeholder="old password" />
              </div>

              <div className={styles.input}>
                <input type="password" placeholder="new password" />
              </div>

              <div className={styles.input}>
                <input type="password" placeholder="current password" />
              </div>
            </div>
            <button className={styles.button}>save</button>
          </div>
          <Link
            className={styles.forget}
            href=""
            style={{ textDecoration: "none" , color:"#0C84DF"}}
          >
            Forgot password?
          </Link>
        </div>
      </main>
    </>
  );
}

export default Changepassword;
