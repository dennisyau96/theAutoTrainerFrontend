import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  function toggle() {
    setCollapsed(!collapsed);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg m-0 p-0 flex-wrap text-right justify-content-end sticky-top bg-slate-200">
        <div className=" flex " id="full-nav">
          <ul className="navbar-nav flex-wrap ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link " to="/reviews">
                Google Reviews
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">
                Testmonials
              </Link>
            </li>

            <li className="nav-item  rounded-4 ">
              <Link className="nav-link " to="/programs">
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to="about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="transition-all duration-500 text-right flex-wrap p-2"
          id="shrink-nav"
        >
          <button
            className=" navbar-toggler text-gray-200 py-1 px-1 pointer-cursor transition-all duration-500"
            id="shrink-nav-btn"
            onClick={() => toggle()}
          >
            <span className=" text-2xl font-bold p-0">=</span>
          </button>
          {collapsed ? null : (
            <div
              id="dropDownList"
              className=" mt-1 transition-all duration-500 dropDownList py-2 "
              aria-expanded="false"
            >
              <ul className="flex-wrap">
                <li>
                  <NavLink
                    className="  hover:text-gray-400 shrinkNavBtn dropdown-item "
                    to="/"
                    onClick={() => toggle()}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <Link
                    className="     shrinkNavBtn dropdown-item"
                    to="/reviews"
                    onClick={() => toggle()}
                  >
                    Google Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    className="  shrinkNavBtn dropdown-item"
                    to="/testimonials"
                    onClick={() => toggle()}
                  >
                    Testimonials
                  </Link>
                </li>

                <li className="">
                  <NavLink
                    className="  shrinkNavBtn dropdown-item "
                    to="/programs"
                    onClick={() => toggle()}
                  >
                    Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="     shrinkNavBtn dropdown-item"
                    to="/about"
                    onClick={() => toggle()}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
