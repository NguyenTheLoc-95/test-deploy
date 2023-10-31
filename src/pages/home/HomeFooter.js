import React from "react";
import style from "./HomeFooter.module.css";
const HomeFooter = (props) => {
 const footers = props.col_values;

  return (
    <div className={style.container} >
      <ul className={style.row}>
        {footers.map(el=>(<li>{el}</li>))}
      </ul>
    </div>
  );
};
export default HomeFooter;
