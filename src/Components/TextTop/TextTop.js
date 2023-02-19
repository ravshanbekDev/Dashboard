import React from "react";

export default function TextTop({ caption, info, title, description }) {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[#252733] text-[19px] tracking-[0.4px]">
          {caption}
        </h2>
        <p className="text-[14px] tracking-[0.2px] text-[#3751FF]">{info}</p>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <h3 className="text-[#9FA2B4] text-[12px] tracking-[0.1px] ">
          {title}
        </h3>
        <h3 className="text-[#4B506D] text-[12px] tracking-[0.1px]">{description}</h3>
      </div>
    </div>
  );
}
