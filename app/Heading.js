import React from "react";

function Heading(props) {
  return (
    <div className="flex w-[100%] justify-center items-center bg-transparent pt-4">
      {/* <div className="w-full bg-pink-600 h-[2px] basis-5/6"></div> */}

      <div className="border-2 border-purple-100 w-64 text-center font-bold text-lg bg-base-300 rounded-full px-3 py-1">
        {props.heading}
      </div>

      {/* <div className="w-full bg-pink-600 h-[2px] basis-5/6"></div> */}
    </div>
  );
}

export default Heading;
