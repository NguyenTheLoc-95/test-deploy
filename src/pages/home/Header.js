import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
   {/*DUONG DAN DEN TRANG /SEARCH */}
  const changePage =()=>{
   window.location.replace('/Search.jsx')
  }
  return (
    <div className={style.header}>
      <h1> A lifetime of discounts? it's Genius.</h1>
      <h4>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </h4>
      <button type="submit">Sign in/Register</button>
      <div className={style.search}>
         <input placeholder={`Where are you going?`+' '+'06/24/2022 to 06/24/2022'+' '+'1 adult 0 children - 1 room' } ></input> 
         <div className={style.change}>
           {/*DUONG DAN DEN TRANG /SEARCH */}
         <a onClick={changePage} href="/Search">Search</a></div>
      </div>
    </div>
  );
};
export default Header;
