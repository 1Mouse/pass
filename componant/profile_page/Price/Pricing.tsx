import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./pricing.module.scss";

function Pricing() {
  const [price, setPrice] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value);
    if (!isNaN(newPrice) && newPrice >= 5) {
      setPrice(String(newPrice));
      setError('');
    } else {
      setPrice(event.target.value);
      setError('Price must be at least 5');
    }
  };

  const handleSave = () => {
    if (Number(price) >= 5) {
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
            <div className={styles.setprice}>
              <label htmlFor="price">set price*</label>
              <input
                className={styles.input}
                id="price"
                type="number"
                placeholder="price"
                value={price || ''}
                min={0}
                onChange={handlePriceChange}
                onMouseEnter={() => (document.body.style.overflow = "hidden")}
                onMouseLeave={() => (document.body.style.overflow = "auto")}
                onFocus={() => (document.body.style.overflow = "hidden")}
                onBlur={() => (document.body.style.overflow = "auto")}
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
