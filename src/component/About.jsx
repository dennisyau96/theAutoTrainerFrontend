import React from "react";
import { useEffect } from "react";
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

const About = () => {
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
      <div className="justify-contents-center text-center p-4 bg-black">
        <h1 className="pageTitle text-white">About</h1>
        <div className="place-item-center justify-content-center flex-nowrap">
          <div className="">
            <Carousel images={images} />
            <div className="aboutPara">
              The Auto Trainer, founded by Paul Iacobazzi, is a company focused
              on coaching, training, and placing individuals in the auto
              industry, with a focus on helping people achieve high incomes.
              They offer a mentorship program and claim a high placement rate.
            </div>
          </div>

          <br />
          <div className="flex-wrap grid-cols-2 flex justify-content-center aboutGrids">
            {/* Here's a more detailed breakdown: */}
            <div className="aboutGrid">
              <span className="aboutGridHeading">Focus</span>
              <span className="aboutGridContent">
                The Auto Trainer aims to help individuals start or advance their
                careers in the automotive sales industry.
              </span>
            </div>
            <div className="aboutGrid">
              <span className="aboutGridHeading">Founder</span>
              <span className="aboutGridContent">
                Paul Iacobazzi, a 25-year veteran of the auto industry, is the
                founder and Executive Director.
              </span>
            </div>{" "}
            <div className="aboutGrid">
              <span className="aboutGridHeading">Training and Mentorship</span>
              <span className="aboutGridContent">
                The company offers a mentorship program and a sales seminar
                called "Detour to Success" for those with little to no
                experience in car sales.
              </span>
            </div>
            <div className="aboutGrid">
              <span className="aboutGridHeading">Placement</span>
              <span className="aboutGridContent">
                They aim to place individuals in dealerships, with claims of a
                high placement rate.
              </span>
            </div>{" "}
            <div className="aboutGrid">
              <span className="aboutGridHeading">Guaranteed Positions</span>
              <span className="aboutGridContent">
                The Auto Trainer claims to "guarantee" a position in the auto
                industry for those who they feel have the potential for success.
              </span>
            </div>{" "}
            <div className="aboutGrid">
              <span className="aboutGridHeading">Income Potentials</span>
              <span className="aboutGridContent">
                The program is designed to help individuals achieve high
                incomes, with examples of candidates earning six-figure
                salaries.
              </span>
            </div>{" "}
            <div className="aboutGrid">
              <span className="aboutGridHeading">Placement Rate</span>
              <span className="aboutGridContent">
                The Auto Trainer claims a 90% placement rate with the 1200
                people who have taken their program.
              </span>
            </div>
            <div className="aboutGrid">
              <span className="aboutGridHeading">Reviews</span>
              <span className="aboutGridContent">
                The Auto Trainer has over 160 reviews with a 5-star rating. The
                reason behind his amazing reviews is simple! His passion and
                methods of teaching are from his heart and non scripted. He
                gives 100% in all of his sessions and he speaks from 35 years of
                auto industry experience with great stories and knowledge.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
