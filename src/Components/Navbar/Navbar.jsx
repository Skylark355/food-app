import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

function Navbar() {
    const [menu, setMenu] = useState("home")

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/"
        onClick={() => setMenu("home")}
        className={menu === "home" ? "active" : ""} 
        >
        Home
        </Link>

        <a 
        href="#explore-menu"
        onClick={()=> setMenu("menu")}
        className={menu === "menu" ? "active": ""}
        >Menu</a>


        <a href="#app-download"
        onClick={()=> setMenu("mobile-app")}
        className={menu === "mobile-app" ? "active" : ""}
        >Mobile App</a>

        <a 
        href="#footer"
        onClick={()=> setMenu("contact-us")}
        className={menu === "contact-us" ? "active" : ""}
        >Contact Us</a>

        {/* <Link to="#explore-mu">Menu</Link> */}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
            </Link>
            <div className="dot">10</div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
