import Head from "next/head";
import Image from "next/image";
import styles from "./pricing.module.scss";
import Skill from "../Choose";

function Pricing() {
  return (
    <>
      <main className={styles.changeprice}>
        <div>
          <h4>Pricing:</h4>
          <div className={styles.price}>
            <div className={styles.setprice}>
              <label>set price*</label>
              <input className={styles.input} type="number" min={0} placeholder="price" />
            </div>

            <button className={styles.button}>save</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pricing;
