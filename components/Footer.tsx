import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 mb-6">
      <div className="w-full max-w-4xl pt-8 m-auto mt-8 text-center border-t sm:mt-4 sm:pt-4 text-fun-gray border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase">
            Made with{" "}
            <div className="inline-flex items-center ml-3 -mt-1 space-x-2">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:georgesoriano74@gmail.com"
              className="font-medium text-fun-gray-light"
            >
              George Soriano
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="inline-flex items-center flex-shrink w-auto px-4 py-2 text-xs font-bold border opacity-50 cursor-pointer sm:w-auto border-fun-pink rounded-xl text-fun-pink"
          href="https://github.com/george624/george-portfolio"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
