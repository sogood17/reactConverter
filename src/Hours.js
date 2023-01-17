import { React, useState } from "react";
import styles from "./btn.module.css";

export default function Hours() {
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
        placeholder="minutes"
        value={flip ? Math.floor(amount * 60) : amount}
        onChange={valueChange}
        disabled={flip}
      ></input>
      <input
        className={styles.input}
        type="number"
        placeholder="hours"
        value={flip ? amount : Math.floor(amount / 60)}
        onChange={valueChange}
        disabled={!flip}
      ></input>
      <button onClick={flipped} className={styles.btn}>
        Change
      </button>
    </div>
  );
}
