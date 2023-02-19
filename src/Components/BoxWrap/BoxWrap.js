import React from "react";
import Box from "../Box/Box";

export default function BoxWrap() {
  return (
    <div className="flex items-center justify-center gap-[30px] mt-[30px]">
      <Box info={"Unresolved"} caption={60} />
      <Box info={"Overdue"} caption={16} />
      <Box info={"Open"} caption={43} />
      <Box info={"On hold"} caption={64} />
    </div>
  );
}
