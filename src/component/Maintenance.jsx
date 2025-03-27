import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Maintenance = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  });
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate(-1), 10000;
  //     }),
  //       [];
  //   });

  const returnbtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Oops! The page is currently under maintenance. </h1>
      <p>
        You will be redirected to the previous page. If no, please click{" "}
        <button onClick={returnbtn}>
          <u>return</u>
        </button>
        .
      </p>
    </div>
  );
};

export default Maintenance;
