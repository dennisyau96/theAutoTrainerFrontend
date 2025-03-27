import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="justify-contents-center text-center p-4">
        <h1 className="pageTitle">About</h1>
        <div className=" text-left">
          The Auto Trainer, founded by Paul Iacobazzi, is a company focused on
          coaching, training, and placing individuals in the auto industry, with
          a focus on helping people achieve high incomes. They offer a
          mentorship program and claim a high placement rate.
          <br />
          <div className="gap-2 grid">
            Here's a more detailed breakdown:
            <div className="grid grid-rows-2"></div>
            <li>
              Focus: The Auto Trainer aims to help individuals start or advance
              their careers in the automotive sales industry.
            </li>
            <li>
              Founder: Paul Iacobazzi, a 25-year veteran of the auto industry,
              is the founder and Executive Director.
            </li>{" "}
            <li>
              Training and Mentorship: The company offers a mentorship program
              and a sales seminar called "Detour to Success" for those with
              little to no experience in car sales.
            </li>
            <li>
              Placement: They aim to place individuals in dealerships, with
              claims of a high placement rate.
            </li>{" "}
            <li>
              Guaranteed Positions: The Auto Trainer claims to "guarantee" a
              position in the auto industry for those who they feel have the
              potential for success.
            </li>{" "}
            <li>
              Income Potential: The program is designed to help individuals
              achieve high incomes, with examples of candidates earning
              six-figure salaries.
            </li>{" "}
            <li>
              Placement Rate: The Auto Trainer claims a 90% placement rate with
              the 1200 people who have taken their program.Reviews: The Auto
              Trainer has over 160 reviews with a 5-star rating. The reason
              behind his amazing reviews is simple ! His passion and methods of
              teaching are from his heart and non scripted . He gives 100% in
              all of his sessions and he speaks from 35 years of auto industry
              experience with great stories and knowledge.
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
