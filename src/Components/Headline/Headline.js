import React from "react";

export default function Headline() {
  return (
    <>
      <div className="grid grid-cols-2 mb-3">
        <h2 className="text-[14px] tracking-[0.2px] text-[#9FA2B4] ml-8">
          Ticket details
        </h2>
        <div className="grid grid-cols-4 place-items-start ">
          <h2 className="text-[14px] tracking-[0.2px] text-[#9FA2B4]">
            Customer name
          </h2>
          <h2 className="text-[14px] tracking-[0.2px] text-[#9FA2B4]">Date</h2>
          <h2 className="text-[14px] tracking-[0.2px] text-[#9FA2B4] ">
            Priority
          </h2>
        </div>
      </div>
      <hr className="border border-solid border-[#DFE0EB] w-[100%]" />
    </>
  );
}
