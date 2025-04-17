import React from "react";
import { useEffect } from "react";
const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="justify-items-center py-8">
      <h1 className="pageTitle my-3"> Testimonials</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-50 h-auto  min-h-50 jusify-contents-center  jusify-self-center border-black "
      >
        <div className="carousel-indicators my-3">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 3"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 3"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 3"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 3"
            aria-current="true"
          ></button>
        </div>
        <div
          className="carousel-inner BGcolor2 p-7 rounded-3  "
          id="carousel-inner"
        >
          <div className="carousel-item active">
            <img
              src="../../DerekLau.png"
              className="d-block w-100"
              alt="Derek Lau(Capilano Volkswagen)"
            />
            <div className="text-center BGcolor3 py-1  align-content-center">
              <span className="ttdealership">Capilano Volkswagen</span>
            </div>
            <div className=" BGcolor3 p-5">
              <span className="ttdesc">
                Whenever I hire new sales people I immediately call Paul
                Iacobazzi to train them at our dealership. Paul always gives us
                great feedback and I trust his judgement. We have a top seller
                in Essiano Majidi and also Sarah Green as part of our success
                stories!! His training is professional and worth the investment!
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../DavidHan.png"
              className="d-block w-100"
              alt="David Han(Destination Mazda)"
            />
            <div className="text-center BGcolor4 py-1  align-content-center">
              <span className="ttname">David Han</span>
              <br></br>
              <span className="ttdealership">Destination Mazda</span>
              <br></br>
              <span className="ttposition">General Sales Manager</span>
            </div>
            <div className=" BGcolor3 p-5">
              <span className="ttdesc">
                Paul utilized our office for several years as a trainer and
                coach at our dealership at the Mazda location. He is turned out
                several top performers from his training, including his son,
                Roman Iacobazzi. We have had 4 top performers come out of his
                program. We are delighted to have Roman as part of our
                management team.
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../JeffPolo.jpeg"
              className="d-block w-100"
              alt="...1"
            />
            <div className="text-center BGcolor4 py-1  align-content-center">
              <span className="ttname">Jeff Polo</span>
              <br />
              <span className="ttdealership">Ace Motors</span>
              <br></br>
              <span className="ttposition">Owner</span>
            </div>
            <div className=" BGcolor3 p-5">
              <span className="ttdesc">
                I utilized Paul’s services when I was managing the Destination
                Group. Several of his candidates became top performers in our
                Mazda dealership. Paul is a seasoned professional and has
                tremendous connections in our industry. He has a straight
                forward style of training that really works!
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../Morris.jpeg" className="d-block w-100" alt="...1" />
            <div className="text-center BGcolor4 py-1  align-content-center">
              <span className="ttname">Morris Lubinich</span>
              <br />
              <span className="ttdealership">Bannister Honda</span>
              <br></br>
              <span className="ttposition">Sales Manager</span>
            </div>
            <div className="  BGcolor3 p-5">
              <span className="ttdesc">
                Paul Iacobazzi actually hired me way back in 1993 as a sales
                consultant. Through the years Paul and I have become close
                friends and I have utilized his services for both hiring and
                training. Paul is a true gentleman, a coach and a mentor and
                truly cares about success for the dealerships. His passion and
                training is high level.
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../Peter.png" className="d-block w-100" alt="...1" />
            <div className="text-center BGcolor4 py-1  align-content-center">
              <span className="ttname">Peter Vethanayagam</span>
              <br />
              <span className="ttdealership">White Rock Hyundai</span>
              <br></br>
              <span className="ttpositiion">Sales Manager</span>
            </div>
            <div className=" BGcolor3 p-5">
              <span className="">
                I took Paul’s program 11 years ago when I arrived from Sri
                Lanka. Not only did Paul train me but he arranged an interview
                with Cedric Gagne for me at White Rock Hyundai. His skill sets
                and experience of over 30 years has given me an opportunity here
                in Canada that I could only dream of. After being a top seller I
                was promoted to management. Thank you Paul and bless you for all
                that you have done for my career!!
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../Cedric.png" className="d-block w-100" alt="...1" />
            <div className="text-center BGcolor4 py-1  align-content-center">
              <span className="ttname">Cedric Gagne</span>
              <br />
              <span className="ttdealership">White Rock Hyundai</span>
              <br></br>
              <span className="ttposition">General Manager</span>
            </div>
            <div className=" BGcolor3 p-5 ">
              <span className="ttdesc">
                I hired Peter Vethanayagam from The Auto Trainer program back in
                2014. Not only has Peter been our top producer every year but he
                is now one of our full time managers. Paul’s program is top
                notch and I admire his ongoing mentoring program.
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../IanQuinn.jpeg"
              className="d-block w-100"
              alt="...1"
            />
            <div className="text-center BGcolor4 py-1  align-content-center">
              <span className="ttname">Ian Quinn</span>
              <br />
              <span className="ttdealership">Destination Honda</span>
              <br></br>
              <span className="ttposition">Former General Manager</span>
            </div>
            <div className=" BGcolor3 p-5 ">
              <span className="ttdesc">
                I worked side by side with Paul Iacobazzi for 5 years as a
                Manager with Honda. Recently I have hired several of his
                trainees with amazing success. His program is very unique and a
                necessity for our ever changing business.
              </span>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev text-black m-3"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
