import React from "react";
import style from "./HomeForm.module.css"

const HomeForm=()=>{
    return(
        <form className={style.forms}>
            <h2>Save time, Save money!</h2>
            <p>Sign up and we'll send the best deals to you</p>
            <span>
            <input type="text"></input><button type="submit">Subscribe</button></span>
        </form>
    )
}
export default HomeForm