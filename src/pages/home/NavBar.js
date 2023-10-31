import React, { useState } from "react";
import styles from "./NavBar.module.css";
import NavbarItem from "./NavbarItem";

const NavBar = (props) => {
  const allNavBar = props.onNavBar;
  return (
    <div className={styles.navbar}>
      <section className={styles.homepage_item}>
        <h3>Booking Website</h3>

        <span>
          <button type="button">Register</button>
          <button type="button">Login</button>
        </span>
      </section>
      <div>
        {allNavBar.map((el) => (<span className={styles.iconnav}>
          <NavbarItem
            icon={el.icon}
            active={el.active}
            type={el.type}
            key={el.icon}
          /></span>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
