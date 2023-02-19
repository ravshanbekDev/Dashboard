import React from "react";

export default function Text({ caption, info }) {
  return (
    <div className="flex items-center justify-between pl-8 pr-8 pb-4 pt-4">
      <h2 className="text-[#252733] text-[19px] tracking-[0.4px]">{caption}</h2>
      <p className="text-[14px] tracking-[0.2px] text-[#9FA2B4]">{info}</p>
    </div>
  );
}
