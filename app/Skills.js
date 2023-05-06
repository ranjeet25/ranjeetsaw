import React from "react";
import Heading from "./Heading";

function Skills() {
  return (
    <div>
      <div className="bg-base-100 h-auto lg:h-screen flex flex-col justify-around items-center">
        <Heading heading="My Skills "></Heading>
        <div className="h-auto  mt-6 py-4 px-4 bg-base-200 text-sm rounded-xl m-2 ">
          <h4 className="lg:text-lg text-md">
            The future belongs to those who learn more{" "}
            <span className="font-bold text-secondary text-lg">skills</span> and
            combine them in creative ways.
          </h4>
          <p className="text-right">- Robert Greene</p>
        </div>
        <div className=" w-full lg:h-[60vh] h-auto flex flex-col lg:flex-row justify-center items-start  ">
          {/* skill 1 */}
          <div className="lg:w-1/4 w-[90vw] h-auto py-6 bg-base-300 m-4 border-dashed rounded-xl hover:border-2 hover:border-violet-700">
            <h2 className="text-6xl font-bold p-4">01</h2>
            <h4 className="pl-4 text-lg">Full Stack Development</h4>
            <p className="px-4 py-4 text-sm h-full lg:h-42">
              I have skill in both front-end and back-end web development. I am
              proficient in multiple programming languages, databases, and
              frameworks that enable them to build and maintain complex web
              applications.
            </p>
            <div className="flex justify-start items-center">
              <button className=" btn btn-outline btn-primary btn-sm  ml-4 ">
                Skills
              </button>

              <div className="w-8 h-8 ml-3 mr-1 bg-base-100 rounded-full">
                <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"></img>
              </div>
              <div className="w-8 h-8 mx-1 bg-base-100 rounded-full">
                <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"></img>
              </div>
              <div className="w-8 h-8 mx-1 bg-base-100 rounded-full">
                <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"></img>
              </div>
              <div className="w-8 h-8 mx-1 bg-base-100 rounded-full">
                <img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/mongodb_compass_macos_bigsur_icon_189933.png"></img>
              </div>
            </div>
          </div>
          {/* skill 2 */}
          <div className="lg:w-1/4 w-[90vw] h-auto py-6 bg-base-300 m-4 rounded-xl hover:border-2 hover:border-secondary border-dashed">
            <h2 className="text-6xl font-bold p-4">02</h2>
            <h4 className="pl-4 text-lg">Data Structure & Algorithms</h4>
            <p className="px-4 py-4 text-sm h-full lg:h-42">
              I am Skilled in designing, analyzing, and implementing Data
              Structures for solving complex problems efficiently. I have
              knowledge of data structures such as arrays, linked lists, stacks,
              queues, trees etc.
            </p>
            <div className="flex justify-start items-center">
              <button className=" btn btn-outline btn-secondary btn-sm  ml-4 ">
                Skills
              </button>
              <div className="w-8 h-8 ml-3 mr-1 bg-base-100 rounded-full">
                <img src="https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"></img>
              </div>
              <div className="w-8 h-8 ml-3 mr-1 bg-base-100 rounded-full">
                <img src="https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png"></img>
              </div>
              <div className="w-8 h-8 ml-3 mr-1 bg-white rounded-full">
                <img src="https://img.icons8.com/?size=512&id=12244&format=png"></img>
              </div>
            </div>
          </div>
          {/* skill 3 */}
          <div className="lg:w-1/4 w-[90vw] h-auto py-6 bg-base-300 m-4 rounded-xl hover:border-2 hover:border-accent border-dashed">
            <h2 className="text-6xl font-bold p-4">03</h2>
            <h4 className="pl-4 text-lg">Data Analysis</h4>
            <p className="px-4 py-4 text-sm h-full lg:h-42">
              I am skilled in data analysis and has expertise in collecting,
              organizing, and interpreting large datasets using various
              statistical and computational techniques. Such as Python,
              pandas,Numpy,metplotlib etc.
            </p>
            <div className="flex justify-start items-center">
              <button className=" btn btn-outline btn-accent btn-sm  ml-4 ">
                Skills
              </button>
              <div className="w-8 h-8 ml-3 mr-1 bg-base-100 rounded-full">
                <img src="https://img.icons8.com/?size=512&id=n73CzMVjH9X9&format=png"></img>
              </div>
              <div className="w-8 h-8 ml-3 mr-1 bg-base-100 rounded-full">
                <img src="https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
