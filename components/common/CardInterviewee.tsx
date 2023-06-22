// import React from "react";
// import Style from "./card.module.scss";
// import Link from "next/link";

// interface CardProps {
//   id: number;
//   interviewer: string;
//   interviewee: string;
//   date: string;
// }

// const CardInterviewee = (props: CardProps) => {
//   // Define a function to handle the click event
//   const handleClick = () => {
//     // Do something when the background is clicked
//     // For example, redirect to another page
//     window.location.href = `/profile/${props.id}`;
//   };

//   return (
//     <div className={Style.slidecontainer}>
//       <div className={Style.slidecontent}>
//         {/* Add an onClick attribute to the div element that has the background */}
//         <div className={Style.card} onClick={handleClick}>
//           <div className={Style.cardcontent}>
//             {/* <div className={Style.header}>
//               <Link href="/profile">
//                 <h4>{props.interviewer}</h4>
//               </Link>
//               <Link href="/profile">
//                 <h4>{props.interviewee}</h4>
//               </Link>
//               <Link href="/profile">
//                 <h4>{props.date}</h4>
//               </Link>
//             </div> */}
//             <Link href={`/profile/${props.id}`}>
//               <h2 className={Style.name}>Interviewer: {props.interviewer}</h2>
//             </Link>
//             <Link href={`/profile/${props.id}`}>
//               <h2 className={Style.name}>Interviewee: {props.interviewee}</h2>
//             </Link>
//             <Link href={`/profile/${props.id}`}>
//               <h2 className={Style.name}>Date: {props.date}</h2>
//             </Link>
//             <button className={Style.button}>Book Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardInterviewee;


















import React from "react";
import Style from "./CardInterviewee.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

library.add(faStar);

interface CardProps {
  interviewerName: string;
  intervieweeName: string;
  date: string;
  status?: "pending" | "confirmed" | "unknown" | "rejected" | "finished";
}

const CardInterviewee = (props: CardProps) => {
  const handleClick = () => {
    window.location.href = "/profile";
  };

  let cardClassName = Style.card;
  switch (props.status) {
    case "pending":
      cardClassName += ` ${Style.pending}`;
      break;
    case "confirmed":
      cardClassName += ` ${Style.confirmed}`;
      break;
    case "rejected":
      cardClassName += ` ${Style.rejected}`;
      break;
    case "finished":
      cardClassName += ` ${Style.finished}`;
      break;
    default:
      cardClassName += ` ${Style.unknown}`;
      break;
  }

  return (
    <div className={Style.slidecontainer}>
  <div className={Style.slidecontent}>
    <div className={cardClassName} onClick={handleClick}>
      <div className={Style.cardcontent}>
      <Link href="/profile">
  <div className={Style.nameContainer}>
    <h4 className={Style.label}>Interviewer Name:</h4>
    <h2 className={Style.interviewerName}>{props.interviewerName}</h2>
  </div>
</Link>
<Link href="/profile">
  <div className={Style.nameContainer}>
    <h4 className={Style.label}>Interviewee Name:</h4>
    <h4 className={Style.intervieweeName}>{props.intervieweeName}</h4>
  </div>
</Link>
        <p className={Style.date}>{props.date}</p>
        <div className={Style.buttonContainer}>
          {props.status === "pending" && (
            <button className={`${Style.button} ${Style.rejectbutton}`}>
              Reject
            </button>
          )}
          {props.status === "confirmed" && (
            <button className={`${Style.button} ${Style.paybutton}`}>
              Pay Now
            </button>
          )}
          {props.status === "finished" && (
            <button className={`${Style.button} ${Style.finishedreviewbutton}`}>
              Review
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default CardInterviewee;
