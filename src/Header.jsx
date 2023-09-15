import React from "react";
import logo from "./images/logo.png"
const Header =()=>{
    return(
        <>
        <div className="header">
      <img src={logo} alt='logo' width='100' height='100'/>
      <h1>Note Taking App</h1>
        </div>
        </>
    )
}

export default Header;