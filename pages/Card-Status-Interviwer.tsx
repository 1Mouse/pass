import React, { useState } from "react";
import styles from "../styles/pages/Card-Status-Interviwer.module.scss";
import CardInterviewer from "@/components/common/CardInterviewer";
export default function CardStatusInterviewer() {
  const data = [
    {
      interviewerName: "David Dell",
      intervieweeName: "John Doe",
      date: "2023-06-22",
      status: "pending",
    },
    {
      interviewerName: "Sarah Smith",
      intervieweeName: "Jane Doe",
      date: "2023-06-23",
      status: "confirmed",
    },
    {
      interviewerName: "Michael Johnson",
      intervieweeName: "Alex Brown",
      date: "2023-06-24",
      status: "finished",
    },
    {
      interviewerName: "Emily Davis",
      intervieweeName: "Chris Wilson",
      date: "2023-06-25",
      status: "rejected",
    },
    {
      interviewerName: "Daniel Thompson",
      intervieweeName: "Emma Green",
      date: "2023-06-26",
      status: "unknown",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData =
    statusFilter === "all"
      ? data
      : data.filter((item) => item.status === statusFilter);

      const handleFilterChange = (status: string) => {
        setStatusFilter((prevFilter) => (prevFilter === status ? "all" : status));
      };

  return (
    <>
      <div>
        <label>Filter:</label>
        <div className={styles.filterButtons}>
          {/* <button
            className={statusFilter === "all" ? styles.active : ""}
            style={{ backgroundColor: "gray", marginRight: "5px" }}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button> */}
          <button
            className={statusFilter === "pending" ? styles.active : ""}
            style={{ backgroundColor: "#ABD9FF", marginRight: "5px" }}
            onClick={() => handleFilterChange("pending")}
          >
            Pending
          </button>
          <button
            className={statusFilter === "confirmed" ? styles.active : ""}
            style={{ backgroundColor: "#98D8AA", marginRight: "5px" }}
            onClick={() => handleFilterChange("confirmed")}
          >
            Confirmed
          </button>
          <button
            className={statusFilter === "finished" ? styles.active : ""}
            style={{ backgroundColor: "#F3E99F", marginRight: "5px" }}
            onClick={() => handleFilterChange("finished")}
          >
            Finished
          </button>
          <button
            className={statusFilter === "rejected" ? styles.active : ""}
            style={{ backgroundColor: "#FF9494", marginRight: "5px" }}
            onClick={() => handleFilterChange("rejected")}
          >
            Rejected
          </button>
        </div>
      </div>

      <div className={styles.cardcontainer}>
        {filteredData.map((item, index) => (
          <div key={index}>
            <CardInterviewer
              interviewerName={item.interviewerName}
              intervieweeName={item.intervieweeName}
              date={item.date}
              status={item.status}
            />
          </div>
        ))}
      </div>
    </>
  );
}


// import React, { useState, useEffect } from "react";
// import styles from "../styles/pages/cardplace.module.scss";
// import Card from "@/components/common/Card";

// export default function CardPlace() {
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     fetch("API_URL")
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming the card data is stored in an array called "cards"
//         const cards = data.cards || [];
//         setCardData(cards);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className={styles.cardcontainer}>
//       {cardData.map((item) => (
//         <Card
//           key={item.name} 
//           rate={item.rate} 
//           price={item.price}
//           name={item.name}
//           bio={item.bio}
//           photo={item.photo} 
//         />
//       ))}
//     </div>
//   );
// }


// --------------------------------------------------


// json


// {
//   "cards": [
//     {
//       "name": "John Smith",
//       "rate": 4.5,
//       "price": "$50",
//       "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id efficitur sapien.",
//       "photo": "https://example.com/photos/john-smith.jpg"
//     },
//     {
//       "name": "Jane Doe",
//       "rate": 4.8,
//       "price": "$75",
//       "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id efficitur sapien.",
//       "photo": "https://example.com/photos/jane-doe.jpg"
//     },
//     {
//       "name": "Bob Johnson",
//       "rate": 4.2,
//       "price": "$60",
//       "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id efficitur sapien.",
//       "photo": "https://example.com/photos/bob-johnson.jpg"
//     }
//   ]
// }