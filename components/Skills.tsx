import React from "react";

type Skill = {
  title: string;
  icon: string;
  style?: object;
};

const Skills = () => {
  const skills: Skill[] = [
    {
      title: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      title: "TailwindCSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
      style: {},
    },
    {
      title: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      style: { filter: "invert(1)" },
    },
    {
      title: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      title: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      title: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      title: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];
  return (
    <div className="relative flex flex-col justify-between md:flex-row">
      <h2 className="relative w-full mb-10 mr-0 text-3xl font-bold text-center md:text-left md:max-w-lg md:mr-10 md:mb-0 md:w-max ">
        I got the experience.
        <br />
        Here is my tech stuff for success.
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h2>
      <div className="relative grid items-center w-full max-w-lg grid-cols-3 mx-auto md:mx-none gap-x-8 gap-y-12 sm:gap-8 md:gap-12 sm:grid-cols-6 place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="flex flex-col items-center justify-center w-10 mx-auto"
            >
              <img className="" src={item.icon} style={item.style} />
              <p className="mt-3 text-xs font-bold text-fun-gray opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
