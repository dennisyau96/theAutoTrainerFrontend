import React from "react";
import { programAdvantages } from "../assets/data";
import { useEffect } from "react";
import programAdvantageCard from "../lego/programAdvantageCard";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
const Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const images = [
    "/PaulClass1.png",
    "/PaulClass2.jpeg",
    "/PaulClass3.jpeg",
    "/PaulClass4.jpeg",
    "/PaulClass6.jpeg",
    "/PaulClass7.jpeg",
    "/PaulClass8.jpeg",
    "/PaulClass9.jpeg",
  ];

  return (
    <>
      <div
        className="text-center justify-items-center bg-black p-4"
        id="programDiv"
      >
        <h1 className="pageTitle text-white">Program</h1>
        <h2 className="pt-2 text-white flex flex-wrap  px-4 text-justify">
          Flexible Car Salesperson Training (Online)
        </h2>
        <div className=" " id="programDetail">
          <div className=" " id="programPart1">
            <h3 className="text-justify py-4  italic  px-1" id="pObj">
              Learn to become a Sucessful Car Salesperson
            </h3>
            <div className="text-justify   px-1 " id="programIntro">
              Our primary focus is to train you with the necessary skill set to
              get you placed for not just a job but a career in the car
              business. We have now placed over 1000 candidates with 250 top
              performers throughout the lower mainland!
            </div>

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
          <div>
            <div className="text-white ">Paul's Tip of The Day</div>
            <button
              className="tipButton"
              onClick={() => {
                if (
                  document
                    .getElementById("tipDsp1")
                    .classList.contains("hidden")
                ) {
                  document.getElementById("tipDsp1").classList.remove("hidden");
                } else {
                  document.getElementById("tipDsp1").classList.add("hidden");
                }
              }}
            >
              1
            </button>
            <div className="tipDsp hidden" id="tipDsp1">
              The first 10 words you say are more important than your next
              1,000. Please don't ask a customer if they have been helped when
              you have seen then stand in your showroom for 5 minutes by
              themselves.
            </div>
            <button
              className="tipButton"
              onClick={() => {
                if (
                  document
                    .getElementById("tipDsp2")
                    .classList.contains("hidden")
                ) {
                  document.getElementById("tipDsp2").classList.remove("hidden");
                } else {
                  document.getElementById("tipDsp2").classList.add("hidden");
                }
              }}
            >
              2
            </button>
            <div className="tipDsp hidden" id="tipDsp2">
              Never make the mistake of prejudging a potential customer just
              because they are wearing casual clothing in your dealership. Treat
              them always like you wanted to be treated and the results will
              often be a positive one. The Auto Trainer sales seminar is all
              about training and motivating people that are at a crossroads in
              their career.
            </div>
            <button
              className="tipButton"
              onClick={() => {
                if (
                  document
                    .getElementById("tipDsp3")
                    .classList.contains("hidden")
                ) {
                  document.getElementById("tipDsp3").classList.remove("hidden");
                } else {
                  document.getElementById("tipDsp3").classList.add("hidden");
                }
              }}
            >
              3
            </button>

            <div className="tipDsp hidden" id="tipDsp3">
              No experience or some experience doesn't really matter. We want
              people to embrace the concepts of building a successful platform
              through our mentoring and coaching program. More often than not
              its a confidence issue and fear of the unknown when changing
              careers. At The Auto Trainer we firmly believe that if you can
              Conceive, and that you can Believe, then you can Achieve. Believe
              in yourself and we can elevate you the rest of the way. Its never
              too late to start a new career.
            </div>
          </div>

          <div className=" border-black m-10  flex flex-wrap " id="videoCont">
            <div>
              <iframe
                id="ytIntro"
                src="https://www.youtube.com/embed/LWuDgsOEINc"
                className="inline-block m-4"
                title="The Auto Trainer Sales Seminar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                src="https://player.vimeo.com/video/397054458"
                id="sampleVideoIframe"
                className="inline-block m-4"
              ></iframe>
            </div>
          </div>

          <div className="px-5">
            <div
              className="py-4 px-4 text-2xl text-white font-monospace flex flex-wrap text-center place-center justify-content-center"
              id=""
            >
              The Auto Trainer (Online) Will Teach You
            </div>
            <div className=" flex flex-wrap  " id="teachItemCont">
              <div className="teachItem  inline-block">
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
            <div className="font-mono text-bold text-white p-4">
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
