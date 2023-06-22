import React, { useState } from "react";
import styles from "../styles/pages/booking.module.scss";
import Head from "next/head";
import CardPlace from "./CardPlace";
import CardStatus from "@/components/common/CardInterviewee";
import CardStatusInterviewee from "./Card-Status-Interviwee";

export default function Booking() {
  const [isCardVisible, setCardVisible] = useState(true);

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };

  return (
    <>
    <Head>
      <title>Booking</title>
    </Head>
    <div className={styles.text}>
      Welcome to the Interviews page. Here you can view all the interviews
      that have been scheduled and their current status.
    </div>
    <div className={styles.page}>
      <div className={styles.booking}>
        <div className={styles.buttonContainer}>
          <button onClick={toggleCardVisibility} className={styles.button}>
            {isCardVisible ? "Hide" : "Show"} Cards
          </button>
        </div>
        {isCardVisible && <h2>Had</h2>}
        {isCardVisible && <CardStatusInterviewee />}
      </div>
    </div>
  </>

  );
}






// import React from "react";
// import styles from "../styles/pages/booking.module.scss";
// import Head from "next/head";
// import CardPlace from "./CardPlace";
// import CardStatus from "@/components/common/CardInterviewee";
// import CardStatusInterviewee from "./Card-Status-Interviwee";

// export default function Booking() {
//   return (
//     <>
//       <Head>
//         <title>Booking</title>
//       </Head>
//       <div className={styles.text}>
//         Welcome to the Interviews page. Here you can view all the interviews
//         that have been scheduled and their current status.
//       </div>
//       <div className={styles.booking}>
//         <details open>
//           <summary>Had</summary>
//           <CardStatusInterviewee />
//         </details>
//       </div>
//     </>
//   );
// }
