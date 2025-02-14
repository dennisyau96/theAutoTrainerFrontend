import React from "react";
import { programAdvantages } from "../assets/data";
import { useEffect } from "react";
import programAdvantageCard from "../lego/programAdvantageCard";
const Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="text-center justify-items-center" id="programDiv">
      <h1 className="pageTitle">Program</h1>
      <h2>Flexible Car Salesperson Training - The Auto Trainer(Online)</h2>
      <h1>Learn to become a Sucessful Car Salesperson</h1>
      <p className="text-justify w-50">
        Our primary focus is to train you with the necessary skill set to get
        you placed for not just a job but a career in the car business. We have
        now placed over 1000 candidates with 250 top performers throughout the
        lower mainland!
      </p>

      <div id="introVideoDiv" className="scale-200 m-20">
        <iframe
          src="https://player.vimeo.com/video/397054458?autoplay=1&color&autopause=0&loop=1&muted=0&title=1&portrait=0&byline=1&h=4ac76d483b#t="
          title="intro video"
          id="introVideo"
          allow="autoplay fullscreen"
        ></iframe>
      </div>

      <ul className="programAdvantage flex  w-full ">
        <li className="PA1 inline   rounded-5 p-2 PA align-content-center h-auto">
          Learn From Paul Iacobazzi
        </li>
        <li className="PA2 inline   rounded-5 p-2 PA align-content-center">
          Build Connections with Talents and Employers
        </li>
        <li className="PA3 inline   rounded-5 p-2 PA align-content-center">
          Obtain follow-up support from Paul
        </li>
      </ul>

      <p>
        The Auto Trainer(Online) Will Teach You:
        <ul className="border-1 border-black justify-items-center">
          <li className="teachItem block">
            Improve your confidence with one on one interactions
          </li>
          <li className="teachItem block">
            Learn the art of persuasive selling techniques without being “pushy”
          </li>
          <li className="teachItem block">
            Ask intelligent questions to gather the right information Use active
            listening skills to understand the customers needs
          </li>
          <li className="teachItem block">
            Master the sales cycle by learning from an experienced Mentor and
            Coach!
          </li>
          <li className="teachItem block">
            Allow us to leverage our 25 years plus of experience and get you the
            results you deserve!
          </li>
        </ul>
        It&apos;s about finding you the right FIT – and it&apos;s what we do
        best.
      </p>
    </div>
  );
};

export default Program;
