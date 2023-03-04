import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Changeemail() {
  return (
    <>
      <main>
        <div>
          <h4>Change Email:</h4>
          <input type="text" placeholder="Email" />
          <button>save</button>
        </div>
      </main>
    </>
  );
}

export default Changeemail;
