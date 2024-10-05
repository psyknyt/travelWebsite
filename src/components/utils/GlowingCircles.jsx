import React from "react";
import "../../css/firelyEffect.css";

const GlowingCircle = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900">
      <div className="firefly w-5 h-5 bg-blue-500 rounded-full relative"></div>
    </div>
  );
};

export default GlowingCircle;
