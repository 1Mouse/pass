import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./pricing.module.scss";

function Pricing() {
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value);
    if (!isNaN(newPrice) && newPrice >= 5) {
      setPrice(newPrice);
      setError('');
    } else {
      setPrice(Number(event.target.value));
      setError('Price must be at least 5');
    }
  };

  const handleSave = () => {
    if (price >= 5) {
      console.log(`Price is ${price}`);
    } else {
      setError('Price must be at least 5');
    }
  };

  return (
    <>
    
      <main className={styles.changeprice}>
        <div>
          <h4>Pricing:</h4>
          <div className={styles.price}>
          <div
  className={styles.setprice}

>
  <label>set price*</label>
  <input
    className={styles.input}
    type="number"
    placeholder="price"
    value={price}
    min={0}
    onChange={handlePriceChange}
    onMouseEnter={() => document.body.style.overflow = 'hidden'}
    onMouseLeave={() => document.body.style.overflow = 'auto'}
    onFocus={() => document.body.style.overflow = 'hidden'}
    onBlur={() => document.body.style.overflow = 'auto'}
  />
  {error && <div className={styles.error}>{error}</div>}
</div>

            <button className={styles.button} onClick={handleSave}>
              save
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pricing;
