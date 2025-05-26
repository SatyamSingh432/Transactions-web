import React from "react";

const Indicator = () => {
  return (
    <div className="flex gap-2.5  text-[10px] text-white ">
      <div className="flex items-center gap-1">
        <div className="h-2 w-7 bg-[#FDE006]"></div>
        <div>Food</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-7 bg-[#A000FF]"></div>
        <div>Entertainment</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-7 bg-[#FF9304]"></div>
        <div>Travel</div>
      </div>
    </div>
  );
};

export default Indicator;
