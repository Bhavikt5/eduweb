import React from "react";
import Back from "../comman/Back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <Back title="Blog posts" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
