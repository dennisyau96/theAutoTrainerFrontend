import React from "react";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="">
      <sction id="landingPage">
        <h1 className=" landingPageTitle relative">
          The Auto Trainer - Paul Iacobazzi
        </h1>
        <p className="LPintroPara relative ">
          <span className="LPPA">
            Have you hit a career wall and making less money than you deserve?
          </span>
          <br />
          <span className="LPPB">
            Are you frustrated that you have a degree and working at Starbucks
            or Earls?
          </span>{" "}
          <br />
          <span className="LPPC">
            Let the Auto Trainer give you the guidance you deserve! You Can EARN
            a Six-Figure Income!
          </span>
        </p>
        <button className="relative rounded-5 bg-purple-200 px-4 py-1 LPPBtn  ">
          <NavLink to="/programs" className="text-white">
            Program
          </NavLink>
        </button>
      </sction>
    </div>
  );
};

export default LandingPage;
