import { validateEmail } from "../../validation/validation";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./changeemail.module.scss";
import Skill from "../choose/Choose";

function Changeemail() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidEmail) {
      console.log(email);
      // do something with valid email
    } else {
      console.log("Invalid email");
      // display error message to user
    }
  };

  return (
    <>
      <main>
        <div className={styles.changeemail}>
          <form onSubmit={handleSubmit}>
              <h4>Change Email:</h4>
            <div className={styles.email}>
              <input
                className={styles.input}
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              
              {!isValidEmail && (
                <span className={styles.error}>
                  Please enter a valid email address
                </span>
              )}
            <button className={styles.button} type="submit">
              save
            </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Changeemail;
