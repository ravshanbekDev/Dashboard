import React from "react";

export default function Button({ btnName, color, style }) {
  return (
    <>
      <button
        className={`py-[5px] px-[12px] text-[#fff] text-[11px] uppercase tracking-[0.5px] rounded-[100px]  ${
          color ? " bg-[#F12B2C]" : "bg-[#FEC400]"
        } `}
        style={style}
      >
        {btnName}
      </button>
    </>
  );
}
