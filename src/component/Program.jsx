import React from "react";
import { programAdvantages } from "../assets/data";
import { useEffect } from "react";
import programAdvantageCard from "../lego/programAdvantageCard";
import Carousel from "./Carousel";
import PaulClass1 from "../../public/PaulClass1.png";
import PaulClass2 from "../../public/PaulClass2.jpeg";
import PaulClass3 from "../../public/PaulClass3.jpeg";
import PaulClass4 from "../../public/PaulClass4.jpeg";
import PaulClass5 from "../../public/PaulClass5.jpeg";
import PaulClass6 from "../../public/PaulClass6.jpeg";
import PaulClass7 from "../../public/PaulClass7.jpeg";
import PaulClass8 from "../../public/PaulClass8.jpeg";
import PaulClass9 from "../../public/PaulClass9.jpeg";
const Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const images = [
    PaulClass1,
    PaulClass2,
    PaulClass3,
    PaulClass4,
    PaulClass6,
    PaulClass7,
    PaulClass8,
    PaulClass9,
  ];

  return (
    <>
      <div className="text-center justify-items-center" id="programDiv">
        <h1 className="pageTitle">Program</h1>
        <h2>Flexible Car Salesperson Training (Online)</h2>

        <div className=" grid grid-auto-flow grid-cols-3" id="programDetail">
          <div className="justify-items-center ">
            <h1 className="text-center my-4">
              Learn to become a Sucessful Car Salesperson
            </h1>
            <p className="text-justify text-black text-2xl px-20 italic ">
              Our primary focus is to train you with the necessary skill set to
              get you placed for not just a job but a career in the car
              business. We have now placed over 1000 candidates with 250 top
              performers throughout the lower mainland!
            </p>

            <div className="PAScroll">
              <span id="PAB1 " className="PA ">
                Learn From Paul Iacobazzi
              </span>
              <span id="PAB2 " className="PA ">
                Build Connections with Talents and Employers
              </span>
              <span id="PAB3 " className="PA">
                Obtain follow-up support from Paul
              </span>
            </div>
          </div>
          <Carousel images={images} />
          <div className=" border-black m-10 grid grid-cols-2">
            <iframe
              id="ytIntro"
              src="https://www.youtube.com/embed/LWuDgsOEINc"
              className=" "
              title="The Auto Trainer Sales Seminar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://player.vimeo.com/video/397054458"
              id="sampleVideoIframe"
            ></iframe>
          </div>

          <div className="border-1 border-black mx-10">
            <span>The Auto Trainer(Online) Will Teach You:</span>
            <div className="wrap justify-content-center justify-items-center">
              <div className="teachItem  inline">
                Improve your confidence with one on one interactions
              </div>
              <div className="teachItem inline-block">
                Learn the art of persuasive seldivng techniques without being
                “pushy”
              </div>
              <div className="teachItem inline-block">
                Ask inteldivgent questions to gather the right information Use
                active divstening skills to understand the customers needs
              </div>
              <div className="teachItem inline-block">
                Master the sales cycle by learning from an experienced Mentor
                and Coach!
              </div>
            </div>
            <div className="teachItem inline-block">
              Allow us to leverage our 25 years plus of experience and get you
              the results you deserve!
            </div>
            <div>
              It&apos;s about finding you the right FIT – and it&apos;s what we
              do best.
            </div>

            <div className="Ptip">
              <h3>Paul’s tips of the day</h3>
              <br />
              <br />
              1) The first 10 words you say are more important than your next
              1,000. Please don't ask a customer if they have been helped when
              you have seen then stand in your showroom for 5 minutes by
              themselves.
              <br />
              <br />
              2) Never make the mistake of prejudging a potential customer just
              because they are wearing casual clothing in your dealership. Treat
              them always like you wanted to be treated and the results will
              often be a positive one.
              <br />
              <br />
              3) The Auto Trainer sales seminar is all about training and
              motivating people that are at a crossroads in their career. No
              experience or some experience doesn't really matter. We want
              people to embrace the concepts of building a successful platform
              through our mentoring and coaching program. More often than not
              its a confidence issue and fear of the unknown when changing
              careers. At The Auto Trainer we firmly believe that if you can
              Conceive, and that you can Believe, then you can Achieve. Believe
              in yourself and we can elevate you the rest of the way. Its never
              too late to start a new career.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
