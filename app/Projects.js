"use client";
import React, { useState } from "react";
import Heading from "./Heading";

function Projects() {
  const projectObj = {
    frontend: [
      {
        srno: "01",
        name: "Random Caption Generator",
        description:
          "The Caption Generator is an tool that can help you come up with creative and engaging captions for your Instagram posts. ",
        link: "https://randomcaption.netlify.app",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
          "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
          "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
          "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png",
        ],
      },
      {
        srno: "02",
        name: "Typo - A typing game",
        description:
          "A typing game which has differen level you can practice your typing skill by playing this game",
        link: "https://typo35.netlify.app/",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
          "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
        ],
      },
    ],

    Fullstack: [
      {
        srno: "01",
        name: "Grivance Managment Platform ",
        description:
          "This Platform provides helping hand to students and staff by acknowledging and solving their problems. It maintains the healthy environment for stakeholders of the institute.",
        link: "https://github.com/ranjeet25/sankalp",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
          "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
          "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
          "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
          "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
        ],
      },
      {
        srno: "02",
        name: "TargetCoaching",
        description:
          "TargetCoaching is a Coaching managment which helps owner to manage its branches,teachers students in one platform.",
        link: "https://github.com/ranjeet25/TargetCoaching",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
          "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
          "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
          "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
        ],
      },
    ],

    Data: [
      {
        srno: "01",
        name: "Suraksha Port",
        description:
          "The problem it mainly focuses on is to do the analysis on the investigation data or the crime records provided by the police station. ",
        link: "https://github.com/ranjeet25/suraksha-port",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
          "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
          "https://cdn.worldvectorlogo.com/logos/django.svg",
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        ],
      },
      {
        srno: "02",
        name: "ResumeX- A Resume Scanner",
        description:
          "ResumeX is a web application which helps job seeker to analyze their resume based on provided job description  ",
        link: "https://github.com/ranjeet25/resumex",
        Tech_Stack: [
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          "https://cdn.worldvectorlogo.com/logos/django.svg",
        ],
      },
    ],

    others: [
      {
        srno: "01",
        name: "Blood4Life ⚡",
        description:
          "A Revolutionary way to Donate and Manage Blood at blood donation camps  ",
        link: "https://github.com/ranjeet25/Blood4Life",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
          "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
          "https://img.icons8.com/?size=512&id=INaKcbx5X5uW&format=png",
        ],
      },
      {
        srno: "02",
        name: "Legal contract summarizer",
        description:
          "Machine learning model that summarizes the contract and highlights key points",
        link: "#",
        Tech_Stack: [
          "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
          "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
          "https://cdn.worldvectorlogo.com/logos/django.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        ],
      },
    ],
  };

  const [project, SetProject] = useState(projectObj.frontend);
  const [projectcss, setProjectcss] = useState(
    "lg:w-1/4 w-[90vw] h-4/5 py-6 bg-base-300 m-4 rounded-xl box-border"
  );
  const [srnocss, setsrnocss] = useState("text-6xl font-bold p-4");
  const [titlecss, setTitlecss] = useState("pl-4 text-lg");

  return (
    <div className="bg-base-200 h-auto lg:h-screen flex flex-col justify-around items-center">
      <Heading heading="My Projects" bg="bg-base-200"></Heading>
      <div className="h-auto  mt-6 py-4 px-4 bg-base-300 text-sm rounded-xl m-2 ">
        <h4 className="lg:text-lg text-md">
          Those who plan do better than those who do not
          <span className="font-bold text-accent text-lg"> plan</span> and even
          though they rarely stick to their plan.
        </h4>
        <p className="text-right">- Winston Churchill </p>
      </div>
      <div className=" w-full lg:h-[60vh] h-auto flex flex-col lg:flex-row justify-center items-start  ">
        <div className="  w-[90vw] lg:w-1/5 h-4/5 bg-base-300 py-6 m-4  rounded-xl flex flex-col justify-around">
          <button
            className="text-white py-4 m-2 bg-base-100 rounded-xl hover:bg-violet-600 active:bg-violet-800 focus:outline-none focus:bg focus:bg-violet-800"
            onClick={() => {
              SetProject(projectObj.frontend);
              setProjectcss(
                "lg:w-1/4 w-[90vw] h-4/5 py-6 bg-base-300 rounded-xl border border-purple-700 m-4"
              );
              setsrnocss("text-6xl font-bold p-4 text-white");
              setTitlecss(
                "pl-4 text-lg underline underline-offset-4 decoration-purple-600"
              );
            }}
          >
            Frontend
          </button>
          <button
            className="text-white py-4 m-2 bg-base-100 rounded-xl hover:bg-secondary active:bg-secondary focus:outline-none focus:bg focus:bg-secondary"
            onClick={() => {
              SetProject(projectObj.Fullstack);
              setProjectcss(
                "lg:w-1/4 w-[90vw] h-4/5 py-6 bg-base-300 m-4 rounded-xl border border-secondary m-4"
              );
              setTitlecss(
                "pl-4 text-lg underline underline-offset-4 decoration-secondary"
              );
            }}
          >
            Fullstack
          </button>
          <button
            className="text-white py-4 m-2 bg-base-100 rounded-xl hover:bg-accent active:bg-accent focus:outline-none focus:bg focus:bg-accent"
            onClick={() => {
              SetProject(projectObj.Data);
              setProjectcss(
                "lg:w-1/4 w-[90vw] h-4/5 py-6 bg-base-300 m-4 rounded-xl border border-accent m-4"
              );
              setTitlecss(
                "pl-4 text-lg underline underline-offset-4 decoration-accent"
              );
            }}
          >
            Machine Learning
          </button>
          <button
            className="text-white py-4 m-2 bg-base-100 rounded-xl hover:bg-orange-600 active:bg-orange-600 focus:outline-none focus:bg focus:bg-orange-600"
            onClick={() => {
              SetProject(projectObj.others);
              setProjectcss(
                "lg:w-1/4 w-[90vw] h-4/5 py-6 bg-base-300 m-4 rounded-xl border border-orange-600 m-4"
              );
              setTitlecss(
                "pl-4 text-lg underline underline-offset-4 decoration-orange-600"
              );
            }}
          >
            Others
          </button>
        </div>

        {/* Project 1 */}
        <div className={projectcss}>
          <h2 className={srnocss}>{project[0].srno}</h2>
          <h4 className={titlecss}>{project[0].name}</h4>
          <p className="px-4 py-2 text-sm h-24 ">{project[0].description}</p>
          <div className="flex flex-row justify-start items-center mb-4">
            <p className="px-4  text-sm font-bold">Project Link :</p>
            <a href={project[0].link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-start items-center">
            <button className=" btn btn-outline btn-primary-content btn-sm  ml-4 ">
              Tech Stack
            </button>
            {project[0].Tech_Stack.map((itr) => {
              return (
                <div className="w-8 h-8 ml-2 mr-1 p-1 bg-base-100 rounded-full hover:bg-base-200">
                  <img src={itr}></img>
                </div>
              );
            })}
          </div>
        </div>
        {/* Project 2 */}
        <div className={projectcss}>
          <h2 className={srnocss}>{project[1].srno}</h2>
          <h4 className={titlecss}>{project[1].name}</h4>
          <p className="px-4 py-2 text-sm h-24 ">{project[1].description}</p>
          <div className="flex flex-row justify-start items-center mb-4">
            <p className="px-4  text-sm font-bold">Project Link :</p>
            <a href={project[1].link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-start items-center">
            <button className=" btn btn-outline btn-primary-content btn-sm  ml-4 ">
              Tech Stack
            </button>
            {project[1].Tech_Stack.map((itr) => {
              return (
                <div className="w-8 h-8 ml-2 mr-1 p-1 bg-base-100 rounded-full hover:bg-base-200">
                  <img src={itr}></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
