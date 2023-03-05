import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import styles from "./container2.module.scss";
import Choose from "../Choose";

function Container2() {
  return (
    <>
      <main>
        <h5 className={styles.title}>Skills:</h5>
        <div>
          {/* <button>Front End</button> */}
        </div>
        <div className={styles.parent}>
          <Choose name="Front End" />
          <Choose name="Back End" />
          <Choose name="IOS" />
          <Choose name="Android" />
          <Choose name="Data Science" />
          <Choose name="DevOps" />
          <Choose name="Management" />
          <Choose name="Kernel" />
          <Choose name="Security" />
          <Choose name="Machine Learning" />
          <Choose name="Big Data" />
          <Choose name="Test Automation" />
        </div>
      </main>
    </>
  );
}

export default Container2;
