import React from "react";
import AboutCard from "../About/AboutCard";
import Testimonial from "../Testimonial/Testimonial";
import HAbout from "./HAbout";
import HBlog from "./HBlog";
import Hero from "./Hero/Hero";
import HPrice from "./HPrice";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <HPrice />
    </div>
  );
};

export default Home;
