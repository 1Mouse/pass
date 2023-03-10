import { useState } from 'react';
import styles from "./container2.module.scss";

const options = [
  "Front End",
  "Back End",
  "IOS",
  "Android",
  "Data Science",
  "DevOps",
  "Management",
  "Kernel",
  "Security",
  "Machine Learning",
  "Big Data",
  "Test Automation"
];

export default function Container2() {
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
  }

  return (
    <>
      <div className={styles['skills']}>
        {options.map((option) => (
          <button
            key={option}
            className={`${styles['button']} ${selectedOptions.includes(option) ? styles['selected'] : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className={styles.saveButton} onClick={handleSave}>Save</button>
    </>
  );
}








































// import Head from "next/head";
// import Image from "next/image";
// import { type } from "os";
// import Choose from "../choose/Choose";
// import { useState } from "react";

// function Container2() {
  
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

//   const handleSelect = (option: string) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const handleSave = () => {
//     console.log(selectedOptions);
//   };

//   return (
//     <>
//       <main>
//         <h5 className={styles.title}>Skills:</h5>
//         <div className={styles.skillsContainer}>
//           {[
//             "Front End",
//             "Back End",
//             "IOS",
//             "Android",
//             "Data Science",
//             "DevOps",
//             "Management",
//             "Kernel",
//             "Security",
//             "Machine Learning",
//             "Big Data",
//             "Test Automation",
//           ].map((option,i) => (
//             <Choose
//               id={i}
//               key={option}
//               name={option}
//               selected={selectedOptions.includes(option)}
//               onSelect={handleSelect}
//             />
//           ))}
//         </div>
//         <button onClick={handleSave}>Save</button>
//       </main>
//     </>
//   );
// }

// export default Container2;
