import React from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className=" text-center justify-items-center bg-black p-4">
      <h1 className="pageTitle text-white">Reviews</h1>
      <div className="block my-2 grid grid-cols-2 gap-4 flex flex-column">
        <div className="col1">
          <span className="GvOs">5.0</span>
          <span className="GvOsStar flex flex-wrap gap-2">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </span>
          <span className="GvOsTotal">171 reviews</span>
        </div>
        <div className="col2">
          <button className="GoogleReviewButton">
            <Link
              to="https://www.google.com/search?client=safari&rls=en&q=The+Auto+Trainer&ie=UTF-8&oe=UTF-8#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-google googleLogo"></i> Reviews
            </Link>
          </button>
          <div className="text-amber-50 align-self-baseline justify-content-end">
            For more google reviews:
          </div>
        </div>
      </div>

      <div className="GRmain overflow-x-auto  py-4">
        <div className="GRComment">
          <div className="GRAuthor">Jarrod Genz</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            Paul was an amazing instructor and I learned a lot from his course.
            He has a very laid back approach that really resonates with myself
            as a student and for customers. He went above and beyond for me and
            gave me very helpful advice for my own business. He is even helping
            to set me up with a potential job offering even after the course has
            concluded. Couldn't ask for a better instructor.
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Dennis</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            Never regret taking this course with Paul. This is not just a Auto
            training, but a life lesson. I learnt so much from Paul. He is not
            the guy who take your money and disappear right after the course
            end. He is always supporting and following up my progress. I wish I
            can give him a 10-star review! The tuition is totally worth it. Paul
            is such a lovely and nice guy, who will surprise you by his
            connection, help and unexpected assistance. I wish I knew this
            gentleman earlier. I highly recommend Paul and his 5 days Auto
            Trainer Program. The tuition fee is less than what you imagined, and
            you are getting the best value of your money!
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Rory Ford-McNicol</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            Paul is an incredible coach. His in-person training and online
            videos are both interesting and very informative! Paul’s approach to
            car sales provides customers with honesty and makes the process fun
            for them. I feel very equipped in starting my career now!
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Tamas Kovacs</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            I did training both online and in person with Paul and there isn’t
            enough words to describe how amazing a trainer he is. His friendly
            and calm demeanour makes it very easy to understand his teachings. I
            learned months and months of lessons in just a few sessions from
            Paul. I would highly recommend Paul if your looking to get into
            sales or even if your in sales and looking to improve , you won’t
            find a better trainer then him. I cannot express how grateful I am
            to have met Paul.
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Kurt McLaws</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            I met Paul back in 2015 when I was looking for a career change. I
            ended up making the decision to get into the automotive sales
            industry last week and I took the Auto trainer course. This was the
            best money I could have ever spent. The course teaches you so many
            crucial items and techniques about automotive sales that you will
            never learn without taking the course. I have been in the financial
            services industry for 11 years in management positions, and he was
            able to teach me things that even I didn’t know. Paul’s experience
            in, and passion for the automotive industry is second to none.
            Within 2 hours of taking this course I got a position in one of the
            biggest dealership groups in Canada! I recommend Paul and this
            course to everyone and anyone looking to get into automotive
            industry, no matter what your sales experience is. I promise you
            this will be the best investment you have ever made.
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Brian Lau</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            I would strongly recommend Paul's course to anyone considering to
            enter the automotive industry, or a sales related industry. His
            course is professionally laid out, the content is very rich. He will
            teach you all the steps in customer engaging, relationship building,
            presentation skills and closing sales. I've gotten a lot of
            confidence than ever and i am using these skillsets in my daily job.
            I would like to thank Paul for his training and mentoring, you are
            the best Paul!
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Joel K</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            I can’t say enough amazing things about Paul personally, and the
            incredible course he teaches! He was very detailed yet easy to
            understand. I loved hearing his real world experiences and examples
            from his 30+ years in the auto industry and how to lean from them.
            Paul is very professional how he represents himself without feeling
            intimidating or fake. He takes the time to listen and understand all
            his students and genuinely wants them to succeed. Lastly, the
            natural way he teaches the class is such a refreshing change from
            the typical PowerPoint word for word slide. This allows us to take
            quick breaks from time to time to stay engaged and excited about the
            content. You really have to experience this course for yourself!
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Richard C</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            I took Paul's course back in February of this year and its the best
            decision I made! The course was informative and very helpful. Not
            only did I learn how to approach certain situations; we also went to
            a car dealership were I ended up getting hired from for one of the
            days in the class. I sold over ten cars in my first three months
            selling cars thanks to Paul's class! I would highly recommend taking
            Paul's course if you have an interest in selling cars or getting
            into sales! It is a great career, not a Job! Paul has followed up
            with me every month after i got hired to make sure I am still doing
            well! Even after you take the course and land a job at a dealership;
            Paul will still keep in contact if you need him for any help or
            advice! If you have even the slight interest in getting into the
            auto business give Paul a call and he will go over everything in
            detail to see if this would be the right fit for you! He is the best
            and a master at his job!
          </div>
        </div>

        <div className="GRComment">
          <div className="GRAuthor">Bianca Ho</div>
          <div className="GRStar">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
          <div className="GRContent">
            Taking the Auto Trainer course with Paul has definitely been a life
            changing experience for me. In 4 short days I have not only learned
            so much about the auto sales industry and how to be a great sales
            professional, but I've also gained an incredible amount of
            confidence. Paul has not only been the best teacher, but also the
            best mentor I could have ever asked for. He believed in me right
            from the start and I can not thank him enough. I would definitely
            recommend this course to anyone that is interested in entering the
            auto sales industry or even anyone who is looking for a change in
            career path! I had absolutely no sales experience prior to taking
            the course, but now, I am proud to say that I know what career path
            I am pursuing! I have my first interview on Thursday with the
            dealership of my dreams and couldn't be more excited!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
