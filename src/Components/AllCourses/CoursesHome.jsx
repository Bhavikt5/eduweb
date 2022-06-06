import React from "react";
import Back from "../comman/Back/Back";
import CoursesCard from "./CoursesCard";
import "./courses.css";
import OnlineCourses from "./OnlineCourses";

const CoursesHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CoursesHome;
