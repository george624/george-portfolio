import React from "react";
import ProjectCard from "../../components/molecules/ProjectCard";
import { projects } from "../../data/projectdata";

const Project = () => {
  return (
    <div>
      <div className="w-full py-12 text-center sm:py-20">
        <h1 className="relative inline-block w-auto mx-auto mb-8 text-4xl sm:text-6xl">
          Projects
          <img
            className="absolute w-10 sqD -top-8 -right-8"
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <p className="max-w-3xl m-auto text-xl text-fun-gray sm:text-2xl">
          I've built cool apps and websites using anything from HTML to React
          (and even NodeJS!). Here are some of my favorite projects over the
          course of my journey.
        </p>
      </div>

      <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
    </div>
  );
};

export default Project;
