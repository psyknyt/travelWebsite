import React from "react";
import "../../css/firelyEffect.css";
import Counter from "./Counter";

const GlowingCircle = ({ props }) => {
  return (
    <div className="relative flex justify-center items-center bg-white m-2">
      {" "}
      {/* Add margin for spacing */}
      <div className="circle w-[16rem] h-[16rem] rounded-full border-[2px] border-[#1CA8CB] z-30 flex items-center justify-center">
        <div className="p-2 w-[14rem] h-[14rem] bg-[#E5E7EB] flex flex-col items-center justify-center rounded-full absolute">
          <Counter
            number={props.number}
            title={props.title}
            symbol={props.symbol}
          />
        </div>
        {/* Firefly as a child of the circle */}
        <div className="firefly w-4 h-4 bg-blue-500 rounded-full absolute z-40"></div>
      </div>
    </div>
  );
};

export default GlowingCircle;
