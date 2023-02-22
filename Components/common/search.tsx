import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';


const SearchBox = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleClick = () => {
      setShowPopup(!showPopup);
    };
  
    return (
      <>
        <div onClick={handleClick}><Image src="/search.png" alt="Logo" width={32}height={32} /></div>
        {showPopup && (
          <div className="search-popup">
            <input type="text" placeholder="Search..." />
            <button onClick={handleClick}>GO</button>
          </div>
        )}
        <style jsx>{`
          .search-popup {
            position: fixed;
            left: 79%;
            top: 150px;
            transform: translate(-50%, -50%);
            padding: 20px;
            border-radius: 10px;
            
            
          }
         
        `}</style>
      </>
    );
  };
  
  export default SearchBox;