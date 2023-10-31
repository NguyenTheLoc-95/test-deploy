import React from "react";
import styles from './SearchPopup.module.css'
const SearchPopup = (props) => {
  return (
    <div className={styles.container_popup}>
      <h2>Search</h2>
      <br />
      <p>Destination</p>
      <input className={styles.input_popup} type="text"></input>
      <p>Check-in Date</p>
      <input className={styles.input_popup} type="text"></input>
      <br />
      <br />
      <p>Options</p>
      <div className={styles.option_controls}>
        <div className={styles.expense__controls}>
          <label>Min price per night</label>
          <input type="number" min="0.01" step={0.01}></input>
        </div>
        <div className={styles.expense__controls}>
          <label>Max price per night</label>
          <input type="number" min="0.01" step={0.01}></input>
        </div>

        <div className={styles.expense__controls}>
          <label>Adult</label>
          <input type="number" min="1" step={1}></input>
        </div>
        <div className={styles.expense__controls}>
          <label>Children</label>
          <input type="number" min="1" step={1}></input>
        </div>
        <div className={styles.expense__controls}>
          <label>Room</label>
          <input type="number" min="1" step={1}></input>
        </div>
      </div>
      <br />
      <button type="submit">Search</button>
    </div>
  );
};
export default SearchPopup;
