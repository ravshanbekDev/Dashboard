import React from "react";
import TicketsIntro from "../../Components/TicketsIntro/TicketsIntro";
import Bottom from "../Bottom/Bottom";
import Headline from "../Headline/Headline";
import MansW from "../MansW/MansW";
export default function TicketsCard() {
  return (
    <div className="bg-[#FFFFFF] border-solid border-[#DFE0EB] rounded-lg max-w-[1122px] mt-7">
      <TicketsIntro />
      <Headline />
      <MansW />
      <Bottom />
    </div>
  );
}
