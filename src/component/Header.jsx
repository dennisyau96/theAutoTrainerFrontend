import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" px-4 py-2 bg-slate-200" id="headerDiv">
        <Link className="navbar-brand block " to="/">
          <div className="headerTitle">The Auto Trainer</div>
        </Link>
      </header>
    </>
  );
};

export default Header;
