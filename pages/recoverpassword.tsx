import { useState, FormEvent } from 'react';
import styles from '../styles/pages/recoverpassword.module.scss';


const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8080/users/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage(data.message);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Something went wrong');
      }
    };
  
    
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Forgot Password</h1>
        <form onSubmit={handleForgotPassword} className={styles.content}>
            <div className={styles.in}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.input}
          />
            </div>

          <button type="submit" className={styles.button}>Submit</button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
  };
  
  export default ForgotPasswordPage;






  



// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/users/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h1 className={styles.title}>Forgot Password</h1>
//       <form onSubmit={handleForgotPassword} className={styles.form}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Submit</button>
//       </form>
//       {message && <p className={styles.message}>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPasswordPage;
