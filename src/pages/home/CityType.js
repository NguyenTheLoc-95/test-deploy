import style from './CityType.module.css';
import React from "react";

const CityType = (props) => {
  return (
    <div className={style.type}>
      <img src={require(`../../` + `${props.image}`)} className={style.image}></img>
      <h3>{props.name}</h3>
      <p>{props.count + "  hotels"}</p>
    </div>
  );
};
export default CityType;
