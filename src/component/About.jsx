import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="justify-items-center ">
        <h1 className="pageTitle">About</h1>
      </div>
    </>
  );
};

export default About;
