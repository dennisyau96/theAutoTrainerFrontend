import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" bg-gray-400 footerDiv botton-0 inset-x-0 text-center justify-center right-0 left-0 h-10/12  theme2 m-0  footer w-full   px-3 pt-3 block"
        id="footerDiv"
      >
        <div className="h-1/6 ">
          <NavLink to="/" className="vis">
            The Auto Trainer
          </NavLink>
          <div className="flex flex-wrap text-center justify-center">
            <Link
              target="_blank"
              onClick={() => {
                const ctr = confirm(
                  "You will be redirected to the Instagram website"
                );
                if (!ctr) {
                  navigate(0);
                }
              }}
              to="https://www.instagram.com/den.y_photography/?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
            >
              <i className="fa fa-instagram m-2 text-white"></i>
            </Link>
            <Link
              target="_blank"
              onClick={() => {
                const ctr = confirm(
                  "You will be redirected to the LinkedIn website"
                );
                if (!ctr) {
                  navigate(0);
                }
              }}
              to="https://www.linkedin.com/in/dennis-yau-314755248/"
            >
              <i className="fa fa-linkedin m-2 text-white"></i>
            </Link>

            <Link
              target="_blank"
              onClick={() => {
                const ctr = confirm(
                  "You will be redirected to the GitHub website"
                );
                if (!ctr) {
                  navigate(0);
                }
              }}
              to="https://github.com/dennisyau96"
            >
              <i className="fa fa-github m-2 text-white"></i>
            </Link>
          </div>
          <div className="text-right h-fit">
            <a href="#" className="text-xs">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
