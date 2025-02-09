import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" bg-slate-200 footerDiv botton-0 inset-x-0 text-center justify-center right-0 left-0 h-10/12  theme2 m-0  footer w-full   px-3 pt-3 block"
        id="footerDiv"
      >
        <div className="h-1/6 ">
          <Link to="/" className=" hover:font-bold text-black footerTitle">
            The Auto Trainer
          </Link>
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
              to="/"
            >
              <i className="fa fa-instagram m-2 text-white gradientFont"></i>
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
              to="https://www.linkedin.com/in/paul-iacobazzi-069aa85b/"
            >
              <i className="fa fa-linkedin m-2 text-blue-600"></i>
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
