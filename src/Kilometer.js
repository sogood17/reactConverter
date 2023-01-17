import { React, useState } from "react";
import styles from "./btn.module.css";

export default function Kilometer() {
  const [amount, setAmount] = useState("");
  const [flip, setFlip] = useState(false);

  function valueChange(event) {
    setAmount(event.target.value);
  }

  function flipped() {
    setFlip(!flip);
  }

  return (
    <div>
      <input
        className={styles.input}
        type="number"
        placeholder="meter"
        value={flip ? Math.floor(amount * 1000) : amount}
        onChange={valueChange}
        disabled={flip}
      ></input>
      <input
        className={styles.input}
        type="number"
        placeholder="kilometer"
        value={flip ? amount : Math.floor(amount / 1000)}
        onChange={valueChange}
        disabled={!flip}
      ></input>
      <button onClick={flipped} className={styles.btn}>
        Change
      </button>
    </div>
  );
}
