import React from "react";
import styles from './CityPage.module.css';

const CityPage = (props) => {

  return (
    <div  className={styles.city}>
    
      <img
        src={require(`../../${props.image}`)}
        alt={props.name}
        className={styles.image}
      />
      <div className={styles.name}>
        <h3>{props.name}</h3>
        <p>{props.subText}</p>
      </div>
    
    </div>
  );
};
export default CityPage;
