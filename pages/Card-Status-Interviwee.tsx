// import React, { useState } from "react";
// import styles from "../styles/pages/Card-Status-Interviwee.module.scss";
// import CardIntervewee from "@/components/common/CardInterviewee";

// export default function CardStatusInterviwee() {
//   const data = [
//     {
//       id: 1,
//       interviewer: "David Dell",
//       interviewee: "John Smith",
//       date: "2023-05-15",
//       status: "pending",
//     },
//     {
//       id: 2,
//       interviewer: "Emma Thompson",
//       interviewee: "Alex Johnson",
//       date: "2023-05-18",
//       status: "confirmed",
//     },
//     {
//       id: 3,
//       interviewer: "Sarah Adams",
//       interviewee: "Michael Brown",
//       date: "2023-05-20",
//       status: "finished",
//     },
//     {
//       id: 4,
//       interviewer: "Robert Davis",
//       interviewee: "Emily Wilson",
//       date: "2023-05-22",
//       status: "rejected",
//     },
//     {
//       id: 5,
//       interviewer: "Jessica Turner",
//       interviewee: "Daniel Lee",
//       date: "2023-05-25",
//       status: "unknown",
//     },
//   ];

//   const [statusFilter, setStatusFilter] = useState("all");

//   const filteredData =
//     statusFilter === "all"
//       ? data
//       : data.filter((item) => item.status === statusFilter);

//   const handleFilterChange = (status: string) => {
//     setStatusFilter(status);
//   };

//   return (
//     <>
//       <div>
//         <label>Filter:</label>
//         <div className={styles.filterButtons}>
//           <button
//             className={statusFilter === "all" ? styles.active : ""}
//             style={{
//               backgroundColor: "gray",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("all")}
//           >
//             All
//           </button>
//           <button
//             className={statusFilter === "pending" ? styles.active : ""}
//             style={{
//               backgroundColor: "#ABD9FF",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("pending")}
//           >
//             Pending
//           </button>
//           <button
//             className={statusFilter === "confirmed" ? styles.active : ""}
//             style={{
//               backgroundColor: "#98D8AA",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("confirmed")}
//           >
//             Confirmed
//           </button>
//           <button
//             className={statusFilter === "finished" ? styles.active : ""}
//             style={{
//               backgroundColor: "#F3E99F",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("finished")}
//           >
//             Finished
//           </button>
//           <button
//             className={statusFilter === "rejected" ? styles.active : ""}
//             style={{
//               backgroundColor: "#FF9494",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("rejected")}
//           >
//             Rejected
//           </button>
//         </div>
//       </div>
  
//       <div className={styles.cardcontainer}>
//         {filteredData.map((item) => (
//           <div key={item.id}>
//             <CardIntervewee
//               interviewer={item.interviewer}
//               interviewee={item.interviewee}
//               date={item.date} id={0}            />
//           </div>
//         ))}
//       </div>
//     </>
//   );
  
// }


// import React, { useState } from "react";
// import styles from "../styles/pages/Card-Status-Interviwee.module.scss";
// import CardIntervewee from "@/components/common/CardInterviewee";

// export default function CardStatusInterviwee() {
//   const data = [
//     {
//       rate: 4,
//       price: 55,
//       name: "David Dell",
//       bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
//       photo: "/photo.svg",
//       status: "pending",
//     },
//     {
//       rate: 4,
//       price: 55,
//       name: "David Dell",
//       bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
//       photo: "/photo.svg",
//       status: "confirmed",
//     },
//     {
//       rate: 4,
//       price: 55,
//       name: "David Dell",
//       bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
//       photo: "/photo.svg",
//       status: "finished",
//     },
//     {
//       rate: 4,
//       price: 55,
//       name: "David Dell",
//       bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
//       photo: "/photo.svg",
//       status: "rejected",
//     },
//     {
//       rate: 4,
//       price: 55,
//       name: "David Dell",
//       bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
//       photo: "/photo.svg",
//       status: "unknown",
//     },
//   ];

//   const [statusFilter, setStatusFilter] = useState("all");

//   const filteredData =
//     statusFilter === "all"
//       ? data
//       : data.filter((item) => item.status === statusFilter);

//   const handleFilterChange = (status: string) => {
//     setStatusFilter(status);
//   };

//   return (
//     <>
//       <div>
//         <label>Filter:</label>
//         <div className={styles.filterButtons}>
//           <button
//             className={statusFilter === "all" ? styles.active : ""}
//             style={{
//               backgroundColor: "gray",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("all")}
//           >
//             All
//           </button>
//           <button
//             className={statusFilter === "pending" ? styles.active : ""}
//             style={{
//               backgroundColor: "#ABD9FF",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("pending")}
//           >
//             Pending
//           </button>
//           <button
//             className={statusFilter === "confirmed" ? styles.active : ""}
//             style={{
//               backgroundColor: "#98D8AA",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("confirmed")}
//           >
//             Confirmed
//           </button>
//           <button
//             className={statusFilter === "finished" ? styles.active : ""}
//             style={{
//               backgroundColor: "#F3E99F",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("finished")}
//           >
//             Finished
//           </button>
//           <button
//             className={statusFilter === "rejected" ? styles.active : ""}
//             style={{
//               backgroundColor: "#FF9494",
//               marginRight: "5px",
//               marginLeft: "5px",
//             }}
//             onClick={() => handleFilterChange("rejected")}
//           >
//             Rejected
//           </button>
//           {/* <button
//             className={statusFilter === "unknown" ? styles.active : ""}
//             style={{ backgroundColor: "purple", marginRight: "5px" , marginTop: "5px" , marginLeft: "5px"}}
//             onClick={() => handleFilterChange("unknown")}
//           >
//             Unknown
//           </button> */}
//         </div>
//       </div>

//       <div className={styles.cardcontainer}>
//         {filteredData.map((item) => (
//           <div key={item.name}>
//             <CardIntervewee
//               rate={item.rate}
//               price={item.price}
//               name={item.name}
//               bio={item.bio}
//               photo={item.photo}
//               status={item.status}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }




import React, { useState } from "react";
import styles from "../styles/pages/Card-Status-Interviwee.module.scss";
import CardInterviewee from "@/components/common/CardInterviewee";

export default function CardStatusInterviwee() {
  const data = [
    {
      interviewerName: "David Dell",
      intervieweeName: "John Doe",
      date: "2023-06-20",
      status: "pending",
    },
    {
      interviewerName: "David Dell",
      intervieweeName: "John Doe",
      date: "2023-06-21",
      status: "confirmed",
    },
    {
      interviewerName: "David Dell",
      intervieweeName: "John Doe",
      date: "2023-06-22",
      status: "finished",
    },
    {
      interviewerName: "David Dell",
      intervieweeName: "John Doe",
      date: "2023-06-23",
      status: "rejected",
    },
    {
      interviewerName: "David Dell",
      intervieweeName: "John Doe",
      date: "2023-06-24",
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
        {filteredData.map((item) => (
          <CardInterviewee
            key={item.date}
            interviewerName={item.interviewerName}
            intervieweeName={item.intervieweeName}
            date={item.date}
            status={item.status}
          />
        ))}
      </div>
    </>
  );
}
