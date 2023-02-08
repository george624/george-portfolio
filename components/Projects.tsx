"use client";
import Link from "next/link";
import React from "react";
import { projects } from "../data/projectdata";
import ProjectCard from "./molecules/ProjectCard";
import SectionTitle from "./SectionTitle";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="relative flex flex-col justify-between pt-8 text-left">
      <div id="learnmore">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionTitle title="Here are a few of my favorite projects." />
        </motion.div>
      </div>
      <div className="grid items-start grid-cols-1 gap-12 md:gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="w-full max-w-sm px-8 py-3 mx-auto mt-8 text-center transition-colors border rounded-full cursor-pointer md:max-w-2xl border-fun-pink whitespace-nowrap text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
