


import { useState } from "react";
import Head from "next/head";
import styles from "./container1.module.scss";
import { validateName } from "../../validation/validation";

function Container1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [level, setLevel] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [bioError, setBioError] = useState("");
  const [levelError, setLevelError] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!level) {
      setLevelError("Please select your level of experience");
      return;
    }

    if (!bio) {
      setBioError("Please enter your bio");
      return;
    }

    if (!firstName) {
      setFirstNameError(true);
      return;
    }

    if (!lastName) {
      setLastNameError(true);
      return;
    }
  };

  const handleFirstNameChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;

    // Validate the first name
    const isValid = validateName(value);
    setFirstName(value);
    setFirstNameError(!isValid);
  };

  const handleLastNameChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;

    // Validate the last name
    const isValid = validateName(value);
    setLastName(value);
    setLastNameError(!isValid);
  };

  const handleBioChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setBio(value);
    setBioError("");
  };

  const handleLevelChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setLevel(value);
    setLevelError("");
  };

  const handleSaveButtonClick = () => {
    // Check if any required fields are empty
    if (!firstName || !lastName || !level || !bio) {
      return;
    }
  
    // Check if there are any errors with the inputs
    if (firstNameError || lastNameError || levelError || bioError) {
      return;
    }
  
    // If all checks pass, log the inputs
    console.log({
      firstName,
      lastName,
      level,
      bio,
    });
  };
  return (
    <>
      <main>
        <div className={styles.general_info}>
          <div className={styles.parentText}>
            <h4 className={styles.text}>General Information</h4>
          </div>
          <div className={styles.general_info_contant}>
            <div className={styles.bio}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formFirstSection}>
                  <div className={styles.inputName}>
                    <label htmlFor="FirstName">First Name *</label>
                    <input
                      id="FirstName"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                    {firstNameError && (
                      <span className={styles.error}>Invalid first name</span>
                    )}
                  </div>
                  <div className={styles.inputName}>
                    <label htmlFor="LastName">Last Name *</label>
                    <input
                      id="LastName"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                    {lastNameError && (
                      <span className={styles.error}>Invalid last name</span>
                    )}
                  </div>
                  <div className={styles.level}>
                    <h4>Level of experience *</h4>
                    <select
                      name="level"
                      id="level"
                      value={level}
                      onChange={handleLevelChange}
                      required
                    >
                      <option value="">-- Select Level --</option>
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                    </select>
                    {levelError && (
                      <span className={styles.error}>{levelError}</span>
                    )}
                  </div>
                </div>
                <div className={styles.textarea}>
                  <label htmlFor="bio">Bio *</label>
                  <textarea
                    className={styles.textareafield}
                    placeholder="Bio..."
                    id="bio"
                    cols={30}
                    rows={9}
                    style={{ resize: "none" }}
                    value={bio}
                    onChange={handleBioChange}
                    required
                  ></textarea>
                  {bioError && (
                    <span className={styles.error}>Please enter a bio</span>
                  )}
                </div>
                <div className={styles.formButtons}>
                  <button  onClick={handleSaveButtonClick}  className={styles.button}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
  
}

export default Container1;
