import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      {/*logo*/}
      <Link to="/">
        <div className="Header-logo">
          <img
            src={
              "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
            }
          />
        </div>
      </Link>
      {/*address*/}
      <div className="Header-optionAddress">
        {/*icon*/}
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello,</span>
          <span className="Header-optionLineTwo">Select your address</span>
        </div>
      </div>
      {/*search*/}
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="Header-navItems">
        {/*login*/}
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello, Shafi</span>
          <span className="Header-optionLineTwo">Account & Lists</span>
        </div>
        {/*orders*/}
        <div className="Header-option">
          <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo">& Orders</span>
        </div>

        {/*cart*/}
        <Link to="/cart">
          <div className="Header-optionCart">
            <ShoppingBasketIcon />
            <span className="Header-cartCount">20</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
