import Image from 'next/image';
import React from 'react';
import styles from './photo.module.scss'
import { json } from 'stream/consumers';

const ImageComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/photo.svg"
          alt="description of image"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}

export default ImageComponent;



// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import styles from './photo.module.scss';

// const ImageComponent = () => {
//   const [imageUrl, setImageUrl] = useState(null);

//   useEffect(() => {
//     fetch('https://example.com/image-url')
//       .then((response) => response.json())
//       .then((data) => setImageUrl(data.url))
//       .catch((error) => console.log(error));
//   }, []);

//   if (!imageUrl) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.image}>
//         <Image src={imageUrl} alt="description of image" width={250} height={250} />
//       </div>
//     </div>
//   );
// };

// export default ImageComponent;


// -------------------------------------------------------------------------------------


// json

// {
//   "imageUrl": "https://example.com/image.jpg"
// }