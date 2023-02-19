import React from "react";
import Sort from "../../Images/sort.svg";
import Filter from "../../Images/filter.svg";
export default function TicketsIntro() {
  return (
    <div className="flex items-center justify-between p-8">
      <h2 className="text-[#252733] text-[19px] tracking-[0.4px]">All tickets</h2>
      <div className="flex items-center justify-betwen gap-[34px]">
        <div className="flex items-center justify-between gap-2">
          <img src={Sort} alt={Sort} />
          <h3 className="text-[#4B506D] text-[14px] tracking-[0.2px]">Sort</h3>
        </div>
        <div className="flex items-center justify-between gap-2">
          <img src={Filter} alt={Filter} />
          <h3 className="text-[#4B506D] text-[14px] tracking-[0.2px]">Filter</h3>
        </div>
      </div>
    </div>
  );
}
