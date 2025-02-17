import React from "react";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="">
      <sction id="landingPage">
        <h1 className=" landingPageTitle relative">
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
          <div className="LPArrowBlock mt-20 hover:scale-110">
            <span className="block text-gray-700 text-3xl    cursor-pointer transition-all ease-in-out ">
              To See Some Successful Story
            </span>
            <i className="block fa fa-arrow-down m-3 text-black text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce "></i>
          </div>
        </button>
      </sction>
    </div>
  );
};

export default LandingPage;
