import React from "react";
import { programAdvantages } from "../assets/data";
import { useEffect } from "react";
import programAdvantageCard from "../lego/programAdvantageCard";
const Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="text-center justify-items-center" id="programDiv">
        <h1 className="pageTitle">Program</h1>
        <h2>Flexible Car Salesperson Training (Online)</h2>

        <div className=" grid grid-auto-flow grid-cols-3" id="programDetail">
          <div className="justify-items-center grid grid-rows-2 border-0 border-black m-10 col-span-2 px-20 py-3">
            <p className="text-justify text-black text-2xl  ">
              <h1>Learn to become a Sucessful Car Salesperson</h1>
              Our primary focus is to train you with the necessary skill set to
              get you placed for not just a job but a career in the car
              business. We have now placed over 1000 candidates with 250 top
              performers throughout the lower mainland!
            </p>
            <ul className="programAdvantage  ">
              <li
                id="PAB1 "
                className="  rounded-5 p-2 m-2 PA align-content-center bg-blue-100 uppercase"
              >
                Learn From Paul Iacobazzi
              </li>
              <li
                id="PAB2 "
                className=" rounded-5 p-2 PA m-2 align-content-center bg-blue-100 uppercase"
              >
                Build Connections with Talents and Employers
              </li>
              <li
                id="PAB3 "
                className="    rounded-5 p-2 PA m-2 align-content-center bg-blue-100 uppercase"
              >
                Obtain follow-up support from Paul
              </li>
            </ul>
          </div>
          <div className=" border-black m-10">
            <iframe
              id="ytIntro"
              src="https://www.youtube.com/embed/LWuDgsOEINc"
              className="w-100 h-100 rounded-4 "
              title="The Auto Trainer Sales Seminar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="border-1 border-black mx-10 col-span-3">
            <div>
              <span>The Auto Trainer(Online) Will Teach You:</span>
              <iframe
                src="https://player.vimeo.com/video/397054458"
                id="sampleVideoIframe"
              ></iframe>
              <div className="teachItem block">
                Improve your confidence with one on one interactions
              </div>
              <div className="teachItem block">
                Learn the art of persuasive seldivng techniques without being
                “pushy”
              </div>
              <div className="teachItem block">
                Ask inteldivgent questions to gather the right information Use
                active divstening skills to understand the customers needs
              </div>
              <div className="teachItem block">
                Master the sales cycle by learning from an experienced Mentor
                and Coach!
              </div>
              <div className="teachItem block">
                Allow us to leverage our 25 years plus of experience and get you
                the results you deserve!
              </div>
              It&apos;s about finding you the right FIT – and it&apos;s what we
              do best.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
