import React from "react";
import Card from "../Card";
import CardTask from "../CardTask/CardTask";

export default function CardWrap() {
  return (
    <div className="mt-[30px] grid gap-5 grid-cols-2	grid-template-columns: repeat(2, minmax(0, 1fr));">
      <Card />
      <CardTask />
    </div>
  );
}
