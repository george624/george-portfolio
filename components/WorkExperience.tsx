import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const WorkExperience = () => {
  return (
    <div className="flex flex-col w-full max-w-md m-auto text-left md:max-w-full">
      <SectionTitle title="Here's my work experience timeline!" />
      <div className="items-start max-w-5xl px-4 m-auto lg:px-0">
        <div className="flex-row space-x-4 lg:flex">
          <ol className="relative w-full border-l border-gray-200 dark:border-gray-700 lg:w-1/2">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-500 dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-teal-600 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                Outdoor Urban Transit Media Inc.{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2021 - December 2022
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Develop UI/UX designs given by the client.
                (ReactJS/TypeScript)
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Build reusable code and component for future use
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Investigate, check logs and fixing bugs.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Project: Property Management System
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-8 ring-gray-500 dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white">
                PCCW Solutions Inc.
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2021 - September 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Develop and maintain application programs (ReactJS)
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Support user acceptance testing and system implementation
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Provide ongoing user and application support
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Project - Government Licensing System for businesses in
                Hongkong.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-500 dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white">
                Novare Technologies
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2019 - February 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Designs, develops and maintains application solutions and
                software for customers. (ReactJS)
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Ensures complete delivery of all customer requirements and
                documentation
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - AWS Cloudwatch and Apigee monitoring
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                - Project - Online Broadband Application
              </p>
            </li>
          </ol>

          <div className="relative flex items-center justify-center w-1/2 ">
            <img
              className="sqD top-[70px] right-[-40px] rotate-[290deg] hidden lg:block"
              src="/static/doodles/skills/fillStar.svg"
            />
            <Image
              src="/static/projects/work.avif"
              alt="work"
              width={1000}
              height={1000}
              className="hidden shadow-2xl lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
