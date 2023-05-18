"use client";
import React, { useState, useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  var obj = {
    aboutme:
      "I am a third-year Information Technology major at Thakur College of Engineering and Technology in Mumbai.I love to design beautiful websites and also add functionality to websites so that I can help someone to achieve their goal. I do find Data analytic Interesting and currently, I am into it! I love to participate in hackathons and provide solutions using my skills. Other than technical things I do like traveling and nature photography.",
    fullStack:
      "A full stack developer with skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms",
    learner:
      "A passionate learner who is always seeking new knowledge and experiences. For me, learning is not just about gaining information, but about expanding my understanding and developing my abilities. I am naturally curious and motivated to explore a wide range of topics and skills",
    problem_solver:
      "A problem solver who is always looking for ways to overcome challenges and find solutions. I have a strong analytical mind and enjoy breaking down complex problems into manageable pieces. I am skilled at researching and gathering information, and I am able to think creatively and outside the box to develop innovative solutions.",
    traveller:
      "A passionate traveler who loves to explore new places, cultures, and experiences. For me, travel is not just a hobby, it's a way of life. I believe that every trip is an opportunity to learn something new, to challenge myself, and to broaden my horizons",
  };

  const [about, setAbout] = useState(obj.aboutme);
  const [aboutbg, setAboutbg] = useState(
    "h-auto lg:h-28 mt-6 py-4 px-4 shadow-sm text-sm rounded-xl"
  );
  const [info_section, setInfo_section] = useState(
    "info_section text-white bg-transparent backdrop-blur-sm h-auto lg:h-[60vh] w-auto  lg:w-3/5 px-8 py-16 rounded-xl  border-2 border-slate-400 "
  );

  const eventHandler = (e) => {
    var res = e.target.value;
    // console.log(res);

    if (res == "I am Full stack devloper") {
      setAbout(obj.fullStack);
      setAboutbg(
        " h-auto lg:h-28 mt-6 py-4 px-4 bg-primary text-sm rounded-xl"
      );
      setInfo_section(
        "info_section text-white bg-transparent backdrop-blur-sm h-auto lg:h-[60vh] w-auto lg:w-3/5 px-8 py-16 rounded-xl border-2 border-purple-700"
      );
    } else if (res == "I am Problem Solver") {
      setAbout(obj.problem_solver);
      setAboutbg(
        " h-auto lg:h-28 mt-6 py-4 px-4 bg-secondary text-sm rounded-xl"
      );
      setInfo_section(
        "info_section text-white bg-transparent backdrop-blur-sm  h-auto lg:h-[60vh] w-auto lg:w-3/5 px-8 py-16 rounded-xl border-2 border-secondary"
      );
    } else if (res == "I am Learner") {
      setAbout(obj.learner);
      setAboutbg(
        " text-black h-auto lg:h-28 mt-6 py-4 px-4 bg-yellow-500 text-sm rounded-xl"
      );
      setInfo_section(
        "info_section text-white bg-transparent backdrop-blur-sm h-auto lg:h-[60vh] w-auto lg:w-3/5 px-8 py-16 rounded-xl border-2 border-yellow-500"
      );
    } else {
      setAbout(obj.traveller);
      setAboutbg(
        " text-black h-auto lg:h-28 mt-6 py-4 px-4 bg-emerald-500 text-sm rounded-xl"
      );
      setInfo_section(
        "info_section text-white bg-transparent backdrop-blur-sm h-auto lg:h-[60vh] w-auto lg:w-3/5 px-8 py-16 rounded-xl border-2 border-emerald-700"
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        opacity: "1",
        backgroundImage:
          "linear-gradient(#1b1b1b 4.2px, transparent 4.2px), linear-gradient(90deg, #1b1b1b 4.2px, transparent 4.2px), linear-gradient(#1b1b1b 2.1px, transparent 2.1px), linear-gradient(90deg, #1b1b1b 2.1px, #000000 2.1px)",
        backgroundSize: "105px 105px, 105px 105px, 21px 21px, 21px 21px",
        backgroundPosition:
          "-4.2px -4.2px, -4.2px -4.2px, -2.1px -2.1px, -2.1px -2.1px",
      }}
      className=" min-h-[85vh] lg:h-[100vh] p-2 bg-base-200 bg-cover flex flex-col justify-center items-center "
    >
      <div className="hidden lg:block">
        <img
          data-aos="zoom-out"
          className="absolute right-4 top-1"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-interface-4291904-3569936.png?f=webp"
        ></img>
      </div>
      <div className={info_section}>
        <img
          className=" h-32 lg:hidden"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-and-development-3317132-2757104.png"
        ></img>
        <p className="text-white">Hey there 👋</p>
        <h2 className="text-white text-4xl  font-bold font-display py-3 ">
          I am Ranjeet Saw
        </h2>
        <select
          className="select select-base-100 w-full max-w-xs"
          onChange={eventHandler}
        >
          <option disabled selected>
            Click to know more About me !!
          </option>
          <option>I am Full stack devloper</option>
          <option>I am Problem Solver</option>
          <option>I am Learner</option>
          <option>I am Traveller</option>
        </select>
        <p className={aboutbg}>{about}</p>

        <div className="flex justify-start items-center mt-6">
          <button className=" btn btn-outline btn-primary-content btn-sm  ">
            Connect
          </button>
          <div className=" w-7 h-7 lg:w-8 lg:h-8 ml-2 lg:ml-3 mr-1 bg-white rounded-full">
            <a href="https://github.com/ranjeet25" target="_blank">
              <img src="https://img.icons8.com/ios/256/github--v1.png"></img>
            </a>
          </div>
          <div className="w-7 h-7 lg:w-8 lg:h-8 mx-1 bg-white rounded-full">
            <a
              href="https://www.linkedin.com/in/ranjeet-saw-4834a21b0/"
              target="_blank"
            >
              <img src="https://img.icons8.com/ios/256/linkedin-circled.png"></img>
            </a>
          </div>
          <div className="w-7 h-7 lg:w-8 lg:h-8 mx-1 bg-white rounded-full">
            <a href="https://twitter.com/ranjeetsaw_" target="_blank">
              <img src="https://img.icons8.com/ios/256/twitter-circled.png"></img>
            </a>
          </div>
          <div className="w-7 h-7 lg:w-8 lg:h-8 mx-1 p-1  bg-white rounded-full ">
            <a href="https://www.instagram.com/imranjeeet/" target="_blank">
              <img src="https://img.icons8.com/plumpy/256/instagram-new.png"></img>
            </a>
          </div>
          <div className="w-7 h-7 lg:w-8 lg:h-8 mx-1 bg-white rounded-full">
            <a href="https://ranjeet25.medium.com/" target="_blank">
              <img
                className="rounded-full border p-1"
                src="https://img.icons8.com/glyph-neue/256/medium-logo.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
