import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Pricing() {
  return (
    <>
      <main>
        <div>
          <h4>Pricing:</h4>
          <input type="text" placeholder="price" />
        </div>
        <div>
          <button>save</button>
        </div>
      </main>
    </>
  );
}

export default Pricing;
