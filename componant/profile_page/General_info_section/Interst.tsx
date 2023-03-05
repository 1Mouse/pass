import Head from "next/head";
import Image from "next/image";
import styles from "./interst.module.scss";
import Choose from "../Choose";

function Container3() {
  return (
    <>
      <main className={styles.interst}>
        <h5 className={styles.title}>interst:</h5>
        <div className={styles.parent}>
          <Choose name="Java Script" />
          <Choose name="C" />
          <Choose name="PHP" />
          <Choose name="Haskell" />
          <Choose name="C++" />
          <Choose name="C#" />
          <Choose name="GO" />
          <Choose name="Python" />
          <Choose name="Swift" />
          <Choose name="Clojure" />
          <Choose name="JavaScript" />
          <Choose name="Ruby" />
        </div>
        <div className={styles.button}>
          <button>save</button>
        </div>
      </main>
    </>
  );
}

export default Container3;
