import React, { useState } from "react";

const Tip = () => {
  const currentTip = useState(0);
  const tips = [
    "The first 10 words you say are more important than your next 1,000. Please don't ask a customer if they have been helped when you have seen then stand in your showroom for 5 minutes by themselves.",
    "Never make the mistake of prejudging a potential customer just because they are wearing casual clothing in your dealership. Treat them always like you wanted to be treated and the results will often be a positive one. The Auto Trainer sales seminar is all about training and motivating people that are at a crossroads in their career.",
    "No experience or some experience doesn't really matter. We want people to embrace the concepts of building a successful platform through our mentoring and coaching program. More often than not its a confidence issue and fear of the unknown when changing careers. At The Auto Trainer we firmly believe that if you can Conceive, and that you can Believe, then you can Achieve. Believe in yourself and we can elevate you the rest of the way. Its never too late to start a new career.",
  ];
  return (
    <div className="tipDiv right-0 sticky" id="tipDiv">
      <div>Paul's Tips</div>
      <div></div>
      <div>{tips[{ currentTip }]}</div>
      <div>
        <span>&lt;</span>
        <span>&gt;</span>
      </div>
      <div onClick={() => {}}>Hide</div>
    </div>
  );
};

export default Tip;
