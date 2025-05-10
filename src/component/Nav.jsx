import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  function toggle() {
    setCollapsed(!collapsed);
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg m-0  flex-wrap  sticky-top   "
        id="navDiv"
      >
        <div className="justify-self-left px-2   w-50 text-top navTitleIcon  ">
          The Auto Trainer
        </div>
        <div className="   w-50  px-3" id="full-nav">
          <ul className="navbar-nav flex-row gap-3 justify-content-end px-2">
            <li className="nav-item ">
              <Link
                className="nav-link   active:text-bold navBtn hover:scale-120 active:text-slate-400"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item  rounded-4  ">
              <Link className="nav-link navBtn hover:scale-120" to="/programs">
                Programs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link navBtn hover:scale-120"
                to="/testimonials"
              >
                Testimonials
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link  navBtn textcolor4 hover:scale-120"
                aria-disabled="true"
                to="about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="transition-all duration-500 text-right flex-wrap p-2 shrink-nav"
          id="shrink-nav"
        >
          <button
            className=" py-1 px-1 pointer-cursor transition-all duration-1000 active:border-0 hover:underline"
            // id="shrink-nav-btn"
            onClick={() => toggle()}
          >
            <span className=" text-lg  ">Menu</span>
          </button>
          {collapsed ? null : (
            <div
              id="dropDownList"
              className=" mt-1  dropDownList py-2 transition-all duration-1000"
              aria-expanded="false"
            >
              <ul className="flex-wrap mr-1">
                <li>
                  <Link
                    className="  hover:text-gray-400 shrinkNavBtn dropdown-item  navBtn nav-link hover:scale-120"
                    to="/"
                    onClick={() => toggle()}
                  >
                    Home
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="     shrinkNavBtn dropdown-item navBtn hover:scale-120"
                    to="/reviews"
                    onClick={() => toggle()}
                  >
                    Google Reviews
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="  shrinkNavBtn dropdown-item navBtn hover:scale-120"
                    to="/testimonials"
                    onClick={() => toggle()}
                  >
                    Testimonials
                  </Link>
                </li>

                <li className="">
                  <Link
                    className="  shrinkNavBtn dropdown-item hover:scale-120"
                    to="/programs"
                    onClick={() => toggle()}
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    className="    shrinkNavBtn dropdown-item hover:scale-120"
                    to="/about"
                    onClick={() => toggle()}
                  >
                    About
                  </Link>
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
