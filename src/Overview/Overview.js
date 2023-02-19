import React from "react";
import HeaderW from "../Components/Header/Header";
import BoxWrap from "../Components/BoxWrap/BoxWrap";
import TrendsWrap from "../Components/TrendsWrap/TrendsWrap";
import CardWrap from "../Components/CardWrap/CardWrap";

export default function OverviewLink() {
  return (
    <div>
      <HeaderW caption={"Overview"} />
      <BoxWrap />
      <TrendsWrap />
      <CardWrap />
    </div>
  );
}
