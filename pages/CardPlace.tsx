import React from "react";
import styles from "../styles/pages/cardplace.module.scss";
import Card from "@/components/common/Card"; 
import { json } from "stream/consumers";

export default function CardPlace() {

  const data = [
    {
      rate: 4,
      price: 55,
      name: "David Dell",
      bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
      photo: "/photo.svg", 
    },
    {
      rate: 5,
      price: 60,
      name: "Alice Smith",
      bio: "Alice is a Web Developer with over 5 years of experience in React",
      photo: "/Facebook.svg", 
    },
    {
        rate: 4,
        price: 10,
        name: "David Dell",
        bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
        photo: "/photo.svg", 
      },{
        rate: 4,
        price: 20,
        name: "David Dell",
        bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
        photo: "/photo.svg", 
      },{
        rate: 4,
        price: 30,
        name: "David Dell",
        bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
        photo: "/photo.svg", 
      },{
        rate: 4,
        price: 40,
        name: "David Dell",
        bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
        photo: "/photo.svg", 
      },{
        rate: 4,
        price: 1000,
        name: "David Dell",
        bio: "Nick is a Senior Product Marketing Manager with over 7 years of",
        photo: "/photo.svg", 
      },
    // more data ...
  ];

  return (
    
    <div className={styles.cardcontainer}>
      {data.map((item) => (
        <Card
          key={item.name} 
          rate={item.rate} 
          price={item.price}
          name={item.name}
          bio={item.bio}
          photo={item.photo} 
        />
      ))}
    </div>
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