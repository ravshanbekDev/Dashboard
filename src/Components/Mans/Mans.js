import React from "react";
import Icon from "../Icons/Icon";
import Dots from "../Dots/Dots";
import Button from "../Button/Button";

export default function Mans({Img, caption, title, customer, on, date, dateNum, btnName, color, style}) {
  return (
    <>
      <div className="grid grid-cols-2 py-6 hover:cursor-pointer hover:bg-[#646782] ">
        <div className="flex  gap-6 ml-8 ">
          <Icon Img={Img} />
          <div className="grid grid-rows-2 ">
            <h2 className="text-[#252733] text-[14px] tracking-[0.2px]">
              {caption}
            </h2>
            <h3 className="text-[12px] tracking-[0.1px] text-[#C5C7CD]">
              {title}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-4 place-items-start">
          <div className="grid grid-rows-2 ">
            <h2 className="text-[#252733] text-[14px] tracking-[0.2px]">
              {customer}
            </h2>
            <h3 className="text-[12px] tracking-[0.1px] text-[#C5C7CD]">
              {on}
            </h3>
          </div>
          <div className="grid grid-rows-2 ">
            <h2 className="text-[#252733] text-[14px] tracking-[0.2px]">
              {date}
            </h2>
            <h3 className="text-[12px] tracking-[0.1px] text-[#C5C7CD]">
              {dateNum}
            </h3>
          </div>
          <Button btnName={btnName} color={color} style={style}/>
          <Dots />
        </div>
      </div>
      <hr className="border border-solid border-[#DFE0EB] w-[100%]" />
    </>
  );
}
