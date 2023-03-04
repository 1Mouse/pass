import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Changepassword() {
  return (
    <>
      <main>
        <div>
          <h4>Pass Word:</h4>
          <input type="password" placeholder="old password" />
          <input type="password" placeholder="new password" />
          <input type="password" placeholder="current password" />
          <a href="" style={{ textDecoration: "none" }}>
            Forgot password?
          </a>
          <button>save</button>
        </div>
      </main>
    </>
  );
}

export default Changepassword;
