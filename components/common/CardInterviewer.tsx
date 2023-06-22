import React from "react";
import Style from "./CardInterviewer.module.scss";
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

const CardInterviewer = (props: CardProps) => {
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
                <>
                  <button className={`${Style.button} ${Style.rejectbutton}`}>
                    Reject
                  </button>
                  <button className={`${Style.button} ${Style.confirmbutton}`}>
                    Confirm
                  </button>
                </>
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

export default CardInterviewer;
