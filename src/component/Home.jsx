import React, { useEffect } from "react";
import LandingPage from "./LandingPage";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="text-center min-vh-100">
        <LandingPage />
        <section id="homeSection1" className="pt-10">
          <h2 className="subtitleA"></h2>
        </section>
        <section
          id="homeSection2"
          className="pt-5 overflow px-3 justify-items-center text-center justify-content-center justify-self-center"
        >
          <h2 className="subtitleB">Sucessful Story</h2>
          <div id="story1" className="sucessfulStory  ">
            <div className="storyPicA">
              <img
                src="../../Essiano Majidi.JPEG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Essiano Majidi</span>
                <span className="storyDealership block">Capilano VW</span>
                <span className="storyDetail ">
                  Essiano has a diverse background including working in Rome in
                  a high end restaurant. In only his second month he was a top
                  producer at Capilano VW and continues to shine. He has been
                  top salesman 6 times out of the last eight.
                </span>
              </div>
            </div>
          </div>
          <div id="story2" className="sucessfulStory ">
            <div className="storyPicB">
              <img
                src="../../Alex Nguyen.JPG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Alex Nguyen</span>
                <span className="storyDealership block">Carter GM</span>
                <span className="storyDetail ">
                  Paul Iacobazzi did a training program at Carter GM due to the
                  request of long time associate Linda McCormick. Part of the
                  program was Alex Nguyen who was a lot attendant a few days
                  prior. From Lot Guy to a Sales Guy, good things can happen
                  with solid training !!
                </span>
              </div>
            </div>
          </div>
          <div id="story3" className="sucessfulStory ">
            <div className="storyPicA">
              <img
                src="https://img.sm360.ca/ir/h250/images/employee/dilawri-group-of-companies/braeden-bhullar-500x500-v21681244853621.png"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Braeden Bhuller</span>
                <span className="storyDealership block">
                  Mercedes Benz of Vancouver
                </span>
                <span className="storyDetail ">
                  Braeden Bhuller took the Auto Trainer course online during
                  COVID. He became a top seller within a few months of getting
                  hired and is now in full swing at Mercedes Benz of Vancouver.
                </span>
              </div>
            </div>
          </div>
          <div id="story4" className="sucessfulStory block">
            <div className="storyPicB">
              <img
                src="../../NavGarg.JPG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Nav Garg</span>
                <span className="storyDealership block">Capilano Audi</span>
                <span className="storyDetail">
                  Nav Garg was working at a pre owned lot and was not happy with
                  the lack of training. He was referred the Auto Trainer program
                  and never looked back. He is very successful selling cars at
                  the prestigious Capilano Audi.
                </span>
              </div>
            </div>
          </div>
          <div id="story5" className="sucessfulStory block">
            <div className="storyPicA">
              <img
                src="../../SarahGreen.jpeg"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Sarah Green</span>
                <span className="storyDealership block">Capilano VW</span>
                <span className="storyDetail ">
                  Sarah comes from a management background in restaurants and
                  pubs back in Scotland. She is enjoying her exciting role as
                  one of the top producers at Capilano VW.
                </span>
              </div>
            </div>
          </div>
          <div id="story6" className="sucessfulStory block">
            <div className="storyPicB">
              <img
                src="../../PeggyWu.jpeg"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Peggy Wu</span>
                <span className="storyDealership block">Regency Toyota</span>
                <span className="storyDetail ">
                  Peggy was recommended the Auto Trainer program by her General
                  Manager Susan Sydor. Immediately after the training her
                  confidence began to build and was a top seller in her first 6
                  months. Many years later she is thriving in her career at
                  Regency Toyota.
                </span>
              </div>
            </div>
          </div>
          <div id="story7" className="sucessfulStory block">
            <div className="storyPicA">
              <img
                src="../../Levi.jpg"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Levi Generale</span>
                <span className="storyDealership block">Regency Toyota</span>
                <span className="storyDetail ">
                  Levi was recommended the Auto Trainer program as he drove a
                  customer home when he was a lot attendant. 3 days later Levi
                  was involved in the training and a week later became a sales
                  professional with Regency Toyota. With Paul’s connections and
                  mentorship he has transformed many lives for not just a job
                  but a CAREER !
                </span>
              </div>
            </div>
          </div>
          <div id="story8" className="sucessfulStory block">
            <div className="storyPicB">
              <img
                src="../../CurtisKmyta.JPG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Curtis Kmyta</span>
                <span className="storyDealership block">Valley Toyota</span>

                <span className="storyDetail">
                  Curtis travelled all the way from Chilliwack to Vancouver to
                  take the Auto Trainer course. At the young age of 22 he
                  purchased his first home and now lives there with wife and
                  family. Car sales has unlimited potential and Curtis is an
                  example of how not to be just good but aim for “excellence “.
                </span>
              </div>
            </div>
          </div>
          <div id="story9" className="sucessfulStory block">
            <div className="storyPicA">
              <img
                src="../../PeterVetra.JPG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Peter Vetra</span>
                <span className="storyDealership block">
                  White Rock Hyundai
                </span>
                <span className="storyDetail ">
                  Peter is an amazing success story which has captured the true
                  essence of the Auto Trainers success. He had arrived from Sri
                  Lanka and Peter saw a ad and took the program and immediately
                  saw huge results in sales. Over 13 yrs later, he is now a
                  Sales Manager at White Rock Hyundai.
                </span>
              </div>
            </div>
          </div>
          <div id="story10" className="sucessfulStory block ">
            <div className="storyPicB">
              <img
                src="../../AaronLi.JPG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Aaron Li</span>
                <span className="storyDealership block">Capilano Audi</span>
                <span className="storyDetail">
                  Aaron was a property manager and wanted to change his career
                  as he felt he had reached his potential. Aaron was introduced
                  to Derek Lau through Paul’s connections and was hired
                  immediately. He is prospering at Capilano Audi as a top seller
                  !!
                </span>
              </div>
            </div>
          </div>
          <div id="story11" className="sucessfulStory block">
            <div className="storyPicA">
              <span className="flex flex-wrap justify-content-center">
                <img
                  src="../../FrankFang.JPG"
                  alt=""
                  className="max-h-70 min-h-auto"
                ></img>
                <img
                  src="../../FrankFang2.JPG"
                  alt=""
                  className="max-h-70 min-h-auto mt-2"
                />
              </span>

              <div>
                <span className="storyName block">Frank Fang</span>
                <span className="storyDealership block">Open Road Lexus</span>
                <span className="storyDetail ">
                  Frank has been of the most successful gentlemen that has been
                  through the training program. Back in 2016 Paul introduced him
                  to his long time friend Kirt Gill at Open Road Mazda. Frank
                  was a top performer and has since moved on to Open Road Lexus
                  of Port Moody. Frank has remained very close to Paul and often
                  supports any questions from any of his current students.
                </span>
              </div>
            </div>

            <div className="storyPicB"></div>
          </div>
          <div id="story12" className="sucessfulStory block">
            <div className="storyPicA">
              <img
                src="../../DestineeBotchar.JPG"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Destinee Botchar</span>
                <span className="storyDealership block">Acura of Langley</span>
                <span className="storyDetail ">
                  Destinee was one of the most enthusiastic people to ever take
                  Paul’s program. Her bubbly personality transitioned her into a
                  top seller within months. She is now enjoying her career at
                  Acura of Langley !!
                </span>
              </div>
            </div>
          </div>
          <div id="story13" className="sucessfulStory  ">
            <div className="storyPicB">
              <img
                src="../../RomanIacobazzi.jpg"
                alt=""
                className="max-h-150 min-h-auto"
              />
              <div>
                <span className="storyName block">Roman Iacobazzi</span>
                <span className="storyDealership block">Destination Mazda</span>
                <span className="storyDetail ">
                  Paul Iacobazzi's son, Roman Iacobazzi began his career in car
                  sales in 2015. After 3 months he won the distinguished Top Gun
                  award for most car sales sold in May. Two months later in July
                  he broke a record by selling 22 cars in one month. After 10
                  years of being in sales he was promoted to being an official
                  sales manager for the Destination group in 2022! His success
                  is all about Customer Service and listening to the customers
                  needs and wants. He has also won a prestigious award in
                  customer service for being ranked number two in all of Canada
                  with a 96% customer satisfaction rate for Mazda .
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="homeSection3" className="pt-10">
          {/* <h2 className="subtitleA">Positive Reviews</h2> */}
        </section>
        <section id="homeSection4"></section>
      </div>
    </>
  );
};

export default Home;
