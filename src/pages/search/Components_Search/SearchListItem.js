import React from "react";
import styles from "./SearchListItem.module.css";
const SearchListItem = (props) => {
  return (
    <figure className={styles.list_search}>
      <img src={require(`../../../${props.image}`)} />
      <div className={styles.item}>
        <div className={styles.item_top}>
          <h2>{props.name}</h2>
          <h3>{props.rateText}</h3>
          <div
            style={{
              backgroundColor: "blue",
              padding: "5px",
              color: "white",
              fontSize: "22px",
              fontWeight: "600",
              margin: "10px",
            }}
          >
            {props.rate}
          </div>
        </div>
        <p>{props.distance} from center</p>
        <h3
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "10px",
            width: "200px",
            padding: "5px 0",
            textAlign: "center",
            height: "auto",
          }}
        >
          {props.tag}
        </h3>
        <h3>{props.description}</h3>
        <p>{props.type}</p>
        <div className={styles.item_bot}>
          <h2>${props.price}</h2>
          <p>includes taxes and fees</p>
          <button type="submit">See availiability</button>
        </div>
      </div>
    </figure>
  );
};
export default SearchListItem;
