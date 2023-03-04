import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Container2() {
  return (
    <>
      <main>
        <h5>Skills:</h5>
        <div>
          <Skill name="Front End" />
          <Skill name="Back End" />
          <Skill name="IOS" />
          <Skill name="Android" />
          <Skill name="Data Science" />
          <Skill name="DevOps" />
          <Skill name="Management" />
          <Skill name="Kernel" />
          <Skill name="Security" />
          <Skill name="Machine Learning" />
          <Skill name="Big Data" />
          <Skill name="Test Automation" />
        </div>
        <button>save</button>
      </main>
    </>
  );
}

export default Container2;
