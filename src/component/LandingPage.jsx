import React from "react";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div id="landingPageDiv">
      {" "}
      {/* <i
        className="absolute text-right  fa fa-solid fa-image m-2 text-slate-400 cursor-pointer hover:scale-150 scale-120 text-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></i> */}
      <sction id="landingPage" className="flex-wrap flex">
        <div id="LPLeftHalf" className="inline-block">
          <img
            src="../../PaulAndJim.jpeg"
            className="z-2 w-auto justify-content-center justify-self-center hover:cursor-pointer hover:scale-105 rounded transition duration-150 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></img>
          <div
            className="modal fade transition-all duration-300"
            id="exampleModal"
            // tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Paul Iacobazzi with Jimmy Pattison
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-left">
                  After 20 wonderful years as a Sales Manager in the auto
                  industry I opted to chase my dream of building my own business
                  as President of my own company The Auto Trainer. It was
                  wonderful to chat with Jimmy about his passion for the auto
                  business and how he was always motivated by our wonderful
                  industry.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="LPRightHalf" className="inline-block">
          {" "}
          <h1
            className=" landingPageTitle  pb-2 block cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            The Auto Trainer - Paul Iacobazzi
          </h1>
          <div
            className="modal fade transition-all duration-150"
            id="exampleModal"
            // tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Paul Iacobazzi with Jimmy Pattison
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-left">
                  After 20 wonderful years as a Sales Manager in the auto
                  industry I opted to chase my dream of building my own business
                  as President of my own company The Auto Trainer. It was
                  wonderful to chat with Jimmy about his passion for the auto
                  business and how he was always motivated by our wonderful
                  industry.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="LPintroPara relative grid-rows-1 gap-0 grid align-content-center cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span className="LPPA justify-center text-justify align-middle text-wrap">
              Have you hit a career wall and making less money than you deserve?
            </span>
            <br />
            <span className="LPPB justify-center  text-justify align-middle text-wrap">
              Are you frustrated that you have a degree and working at Starbucks
              or Earls?
            </span>
            <br />
            <span className="LPPC justify-center  justify-content-center  align-middle text-wrap justify-self-center text-justify justify-items-center place-content-center place-items-center place-self-center ">
              Let the Auto Trainer give you the guidance you deserve! You CAN
              EARN a Six-Figure Income!
            </span>
          </div>
          <button className="relative rounded-5  px-4 py-1 LPPBtn my-3 mx-3  transition-all duration-150">
            <Link to="/programs" className="nav-link">
              Program
            </Link>
          </button>
          <button className="relative rounded-5  px-4 py-1 LPGvBtn my-3 mx-3  transition-all duration-150">
            <Link to="/reviews" className="nav-link ">
              Google Reviews
            </Link>
          </button>
          <button className="relative rounded-5  px-4 py-1 LPTmBtn my-3 mx-3  transition-all duration-150">
            <Link to="/testimonials" className="nav-link ">
              Testimonials
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
            <div className="LPArrowBlock mt-1   drop-shadow-2xl rounded-4 p-2 hover:scale-110 transition-all duration-150 ">
              <span className=" text-slate-400 text-3xl    cursor-pointer transition-all ease-in-out ">
                {/* <i className="block fa fa-arrow-down m-3 text-gray-700 text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce  "></i>
              Scroll Down
              <i className="block fa fa-arrow-down m-3 text-gray-700 text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce "></i> */}
                To See The Successful Stories
                <svg
                  className="svg-icon down-arrow scale-7  animate-bounce motion-reduce:animate-bounce "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 51.92"
                  style={{ fill: "white" }}
                >
                  <path d="M46.262,51.92,0,5.657,5.657,0,46.262,40.6,86.867,0l5.656,5.657Z"></path>
                </svg>
              </span>

              {/* <i className="block fa fa-arrow-down m-3 text-black text-3xl   cursor-pointer transition-all ease-in-out animate-bounce motion-reduce:animate-bounce "></i> */}
            </div>
          </button>
        </div>
      </sction>
    </div>
  );
};

export default LandingPage;
