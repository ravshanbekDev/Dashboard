import React from "react";
import Line from "../Line/Line";
import Trends from "../Trends/Trends";
import "./TrendWrap.scss";

export default function TrendsWrap() {
  return (
    <div className="TrendsWrap max-w-[1112px] mx-auto mt-[30px]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="TrendsWrap__caption">Today’s trends</h2>
          <p className="TrendsWrap__data">as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className="flex items-start gap-8">
          <Line title={"Today"} caption={"Yesterday"} />
          <div>
            <Trends caption={"Resolved"} info={"449"} />
            <Trends caption={"Resolved"} info={"426"} />
            <Trends caption={"Average first response time"} info={"33m"} />
            <Trends caption={"Average response time"} info={"3h 8m"} />
            <Trends caption={"Resolution within SLA"} info={"94%"} />
          </div>
        </div>
      </div>
    </div>
  );
}
