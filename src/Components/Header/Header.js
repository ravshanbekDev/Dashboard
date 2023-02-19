import React from "react";
import news from "../../Images/newTicket.svg";
import HeaderR from "../HeaderR/HeaderR";

export default function HeaderW({ caption }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[#252733] text-[24px] tracking-[0.3px]">{caption}</h2>
      <HeaderR news={news}/>
    </div>
  );
}
