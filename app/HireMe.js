"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [info_section, setInfo_section] = useState(
    "info_section text-white bg-transparent backdrop-blur-sm h-auto lg:h-[40vh] w-auto  lg:w-2/5 px-8 py-16 rounded-xl  border-2 border-slate-400 "
  );

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
      className=" bg-gray-300 min-h-[85vh] lg:h-[100vh] p-2 bg-cover flex   items-center "
    >
      <div className=" h-full bg-transparent backdrop-blur-sm  w-1/4 flex flex-col justify-center items-center">
        <div className="w-44  my-4 flex flex-col justify-center items-center  rounded-xl">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-5996829-4972888.png"></img>
          <h4 className="font-bold"> Web designing</h4>
        </div>
        <div className="w-44  mt-4 flex flex-col justify-center items-center  rounded-xl">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-5467935-4568166.png"></img>
          <h4 className="font-bold"> Digital marketing</h4>
        </div>
        <div className="w-44  mt-4 flex flex-col justify-center items-center  rounded-xl">
          <img src="https://static.vecteezy.com/system/resources/previews/011/153/364/original/3d-website-developer-working-on-laptop-illustration-png.png"></img>
          <h4 className="font-bold"> Backend Development</h4>
        </div>
      </div>

      <div className="  lg:h-[100vh] w-5/6  flex flex-col justify-center items-start pl-72">
        <div className="hidden lg:block">
          <Image
            width={320}
            height={320}
            loading="lazy"
            className=" "
            src="https://static.vecteezy.com/system/resources/previews/011/356/120/original/young-man-holding-a-laptop-3d-character-illustration-png.png"
          ></Image>
        </div>
        <div className="info_section text-white bg-transparent backdrop-blur-sm h-auto lg:h-[40vh] w-auto  lg:w-4/5 px-8 py-16 rounded-xl  border-2 border-slate-400 ">
          <h2 className=" font-bold text-[2rem] ">Hire Me as FreeLancer</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
