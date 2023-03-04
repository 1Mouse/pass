import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Container3() {
  return (
    <>
      <main>
        <h5>Skills:</h5>
        <div>
          <Skill name="Java Script" />
          <Skill name="C" />
          <Skill name="PHP" />
          <Skill name="Haskell" />
          <Skill name="C++" />
          <Skill name="C#" />
          <Skill name="GO" />
          <Skill name="Python" />
          <Skill name="Swift" />
          <Skill name="Clojure" />
          <Skill name="JavaScript" />
          <Skill name="Ruby" />
        </div>
        <button>save</button>
      </main>
    </>
  );
}

export default Container3;
