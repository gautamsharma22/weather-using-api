import React from "react"
import MyImage from "../src/logo512.png";
function Header() {
    return (
      <header>
        <nav className="nav">
          <img src={MyImage} alt="logo" className="nav-logo" />
          <h3 className="logo-title">Weather Application </h3>
        <ul className="nav-items" >
          <li> Home </li>
          <li> About </li>
          <li> Help</li>
          <li> Exit</li>
        </ul>
        </nav>
      </header>
    );
}
  export default Header