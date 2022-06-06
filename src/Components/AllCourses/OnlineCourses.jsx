import React from "react";
import { online } from "../../dummydata";
import Title from "../comman/Title/Title";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Title subtitle="courses" title="browse our online courses" />

          <div className="content grid3">
            {online.map((val) => (
              <div className="box shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>

                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
