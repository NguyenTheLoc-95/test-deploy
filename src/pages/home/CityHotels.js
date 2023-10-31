import style from "./CityHotels.module.css";
import React from "react";

const CityHotels = (props) => {
  return (
    <div className={style.hotels}>
      <img
        src={require(`../../` + `${props.image}`)}
        className={style.images}
      ></img>
      <a href="/detail">{props.name}</a>
      <p>{props.city}</p>
      <h4>Starting from ${props.price}</h4>
      <span className={style.spans}> {props.rate}</span>
      <span>{props.type}</span>
    </div>
  );
};
export default CityHotels;
