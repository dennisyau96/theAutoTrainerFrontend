import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  function toggle() {
    setCollapsed(!collapsed);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg m-0  flex-wrap  sticky-top bg-slate-200 ">
        <div
          className="justify-self-left px-2   w-50 text-top navTitleIcon "
          id="navTitle"
        >
          The Auto Trainer
        </div>
        <div className="   w-50  px-3" id="full-nav">
          <ul className="navbar-nav flex-row gap-3 justify-content-end px-2">
            <li className="nav-item ">
              <NavLink
                className="nav-link  active:text-blue-500 active:text-bold navBtn"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item  rounded-4  ">
              <NavLink className="nav-link navBtn" to="/programs">
                Programs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link navBtn" to="/testimonials">
                Testmonials
              </NavLink>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link  navBtn"
                aria-disabled="true"
                to="about"
              >
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
            className=" navbar-toggler text-gray-200 py-1 px-1 pointer-cursor transition-all duration-1000 active:border-0"
            id="shrink-nav-btn"
            onClick={() => toggle()}
          >
            <span className=" text-2xl font-bold p-0">=</span>
          </button>
          {collapsed ? null : (
            <div
              id="dropDownList"
              className=" mt-1  dropDownList py-2 transition-all duration-1000"
              aria-expanded="false"
            >
              <ul className="flex-wrap">
                <li>
                  <NavLink
                    className="  hover:text-gray-400 shrinkNavBtn dropdown-item navBtn"
                    to="/"
                    onClick={() => toggle()}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="     shrinkNavBtn dropdown-item navBtn"
                    to="/reviews"
                    onClick={() => toggle()}
                  >
                    Google Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="  shrinkNavBtn dropdown-item navBtn"
                    to="/testimonials"
                    onClick={() => toggle()}
                  >
                    Testimonials
                  </NavLink>
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
