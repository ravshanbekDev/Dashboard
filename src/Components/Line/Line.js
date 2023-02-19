import React from "react";

export default function Line({ title, caption }) {
  return (
    <div className="flex items-center justify-center gap-8 pt-[65px]">
      <div className="flex items-center justify-center gap-2 ">
        <hr
          style={{
            backgroundColor: "#3751FF",
            width: "20px",
            border: "2px solid #3751FF",
            borderRadius: "10px",
          }}
        />
        <h2 className="text-[#9FA2B4] text-[12px] tracking-[0.1px]">{title}</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <hr
          style={{
            backgroundColor: "#DFE0EB",
            width: "20px",
            border: "2px solid #DFE0EB",
            borderRadius: "10px",
          }}
        />
        <h2 className="text-[#9FA2B4] text-[12px] tracking-[0.1px]">
          {caption}
        </h2>
      </div>
    </div>
  );
}
