import React from "react";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="">
      <sction id="landingPage">
        <h1 className=" landingPageTitle relative pb-10">
          The Auto Trainer <br />
          Paul Iacobazzi
        </h1>
        <p className="LPintroPara relative ">
          <span className="LPPA justify-center">
            Have you hit a career wall and making less money than you deserve?
          </span>
          <br />
          <span className="LPPB justify-center">
            Are you frustrated that you have a degree and working at Starbucks
            or Earls?
          </span>{" "}
          <br />
          <span className="LPPC justify-center">
            Let the Auto Trainer give you the guidance you deserve! You CAN EARN
            a Six-Figure Income!
          </span>
        </p>
        <button className="relative rounded-5  px-4 py-1 LPPBtn my-3 ">
          <Link to="/programs" className="nav-link">
            Program
          </Link>
        </button>
        <br />
        <button
          onClick={() => {
            document
              .getElementById("homeSection2")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="LPArrowBlock mt-1 hover:text-white  drop-shadow-2xl rounded-4 p-3 ">
            <span className="block text-gray-700 text-3xl    cursor-pointer transition-all ease-in-out ">
              {/* <i className="block fa fa-arrow-down m-3 text-gray-700 text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce  "></i>
              Scroll Down
              <i className="block fa fa-arrow-down m-3 text-gray-700 text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce "></i> */}
              <br />
              To See The Successful Stories
            </span>
            <svg
              className="svg-icon down-arrow scale-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 51.92"
            >
              <path d="M46.262,51.92,0,5.657,5.657,0,46.262,40.6,86.867,0l5.656,5.657Z"></path>
            </svg>

            {/* <i className="block fa fa-arrow-down m-3 text-black text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce "></i> */}
          </div>
        </button>
      </sction>
    </div>
  );
};

export default LandingPage;
