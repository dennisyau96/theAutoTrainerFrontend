import React from "react";
import { programAdvantages } from "../assets/data";
import programAdvantageCard from "../lego/programAdvantageCard";
const Program = () => {
  return (
    <div className="text-center justify-items-center">
      <h1 className="">Program</h1>
      <h2>Flexible Car Salesperson Training - The Auto Trainer(Online)</h2>
      <h1>Learn to become a Sucessful Car Salesperson</h1>
      <p className="text-justify">
        Our primary focus is to train you with the necessary skill set to get
        you placed for not just a job but a career in the car business. We have
        now placed over 1000 candidates with 250 top performers throughout the
        lower mainland!
      </p>

      <iframe
        src="https://player.vimeo.com/video/397054458?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=4ac76d483b#t="
        title="intro video"
      ></iframe>
      <ul className="programAdvantage flex ">
        <li className="PA1 inline px-5  rounded-5 p-2 m-5">
          Learn From Paul Iacobazzi
        </li>
        <li className="PA2 inline px-5  rounded-5 p-2 m-5">
          Build Connections with Talents and Employers
        </li>
        <li className="PA3 inline px-5  rounded-5 p-2 m-5">
          Obtain follow-up support from Paul
        </li>
      </ul>

      <p>
        The Auto Trainer(Online) Will Teach You:
        <ul className="">
          <li>Improve your confidence with one on one interactions</li>
          <li>
            Learn the art of persuasive selling techniques without being “pushy”
          </li>
          <li>
            Ask intelligent questions to gather the right information Use active
            listening skills to understand the customers needs
          </li>
          <li>
            Master the sales cycle by learning from an experienced Mentor and
            Coach!
          </li>
          <li>
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
