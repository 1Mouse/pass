import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Changeusename() {
  return (
    <>
      <main>
        <div>
          <h4>Change Username:</h4>
          <input type="text" placeholder="Username" />
          <button>save</button>
        </div>
      </main>
    </>
  );
}

export default Changeusename;
