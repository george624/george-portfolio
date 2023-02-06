import React from "react";
import { designs } from "../../data/designdata";

const Designs = () => {
  return (
    <>
      <div className="relative w-full py-16 text-center sm:py-20">
        <h1 className="relative inline-block w-auto mb-8 text-4xl sm:text-6xl">
          Designs
          <img
            className="absolute w-12 sqD -top-6 -right-8"
            src="/static/doodles/skills/fillStar.svg"
          />
        </h1>
        <p className="text-xl text-fun-gray sm:text-2xl">
          Enough said. Let's have the pictures do the talking.
        </p>
      </div>
      <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        {designs.map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <a href={item.link} target="_blank" className="w-full">
                <img
                  className="object-cover w-full transition-opacity h-96 hover:opacity-75"
                  src={item.img}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Designs;
