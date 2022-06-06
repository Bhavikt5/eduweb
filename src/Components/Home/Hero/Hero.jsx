import React from "react";
import Title from "../../comman/Title/Title";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACDAEMIA"
              title="Best Online Education"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quas nam iure ipsam laboriosam rerum, deserunt quisquam labore.
              Laborum eius, officiis error beatae nam explicabo sed eum tempora
              porro a.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSES<i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="margin"></div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
