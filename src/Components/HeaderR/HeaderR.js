import React from "react";
import search from "../../Images/search.svg";
import boy from "../../Images/header.png";
export default function HeaderR({news}) {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex items-center gap-4">
        <img src={search} alt="search"></img>
        <img src={news} alt="news"></img>
      </div>
      <hr className="rotate-180 border bg-[#DFE0EB] h-[32px]" />
      <div className="flex items-center gap-[14px]">
        <h2 className="text-[14px] text-[#252733] tracking-[0.2px] text-right">
          Jones Ferdinand
        </h2>
        <div className="rounded-[50%] w-[48px] h-[48px] border-2 #DFE0EB flex items-center justify-center">
          <img src={boy} alt="Image" className="w-[40px] h-[40px] rounded-[50%]"/>
        </div>
      </div>
    </div>
  );
}
