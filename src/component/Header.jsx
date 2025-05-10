import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" px-4 py-2 shadow-sm " id="headerDiv">
        {/* <span id="shrinkHeaderIcon">The Auto Trainer</span> */}
        <Link className="navbar-brand block " to="/">
          <img src="../auto-logo.png" className="headerLogo"></img>

          {/* <div className="headerTitle">The Auto Trainer</div> */}
          {/* <img src="../public/auto-logo.png" className="headerTitle"></img> */}
        </Link>
      </header>
    </>
  );
};

export default Header;
