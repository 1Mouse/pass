import { useState } from "react";
import styles from "./container2.module.scss";

const options = [
  "Java Script",
  "C",
  "PHP",
  "Haskell",
  "C++",
  "C#",
  "GO",
  "Python",
  "Swift",
  "Clojure",
  "JavaScript",
  "Ruby",
];

export default function Container3() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((selected) => selected !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  const handleSave = () => {
    console.log(selectedOptions);
  };

  return (
    <>
      <div className={styles["button-grid"]}>
        {options.map((option) => (
          <button
            key={option}
            className={`${styles["button"]} ${
              selectedOptions.includes(option) ? styles["selected"] : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className={styles.saveButton} onClick={handleSave}>
        Save
      </button>
    </>
  );
}
