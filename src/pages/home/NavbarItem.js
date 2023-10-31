import React, { useState } from "react";
import styles from "./NavbarItem.module.css";
const NavbarItem = (props) => {
  const [actives, setActives] = useState(props.active);
  
  const isActive = () => {

      setActives(true);
      console.log(actives);
      console.log(props.active);

  };
  console.log(props.active);
  return (
    <a 
      className={styles[actives===true ? 'active' : '']}  onClick={isActive}>
      <i className={props.icon} aria-hidden="true"></i>
      {" " + `${props.type}`}
    </a>
  );
};
export default NavbarItem;
