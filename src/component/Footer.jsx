import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="  footerDiv botton-0 inset-x-0 text-center justify-center right-0 left-0 h-10/12  m-0  footer w-full   px-5 pt-5 pb-8 block"
        id="footerDiv"
      >
        <div className="h-1/6 ">
          <Link
            to="/"
            className=" hover:font-bold text-black footerTitle nav-link justify-self-center "
          >
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
            <Link
              target="_blank"
              onClick={() => {
                const ctr = confirm(
                  "You will be redirected to the Facebook website"
                );
                if (!ctr) {
                  navigate(0);
                }
              }}
              to="https://www.facebook.com/paul.iacobazzi/"
            >
              <i className="fa fa-solid fa-facebook m-2 text-blue-600"></i>
            </Link>
          </div>
          <div className="text-right h-fit">
            <a href="#" className="text-xs nav-link hover:text-red-200">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
