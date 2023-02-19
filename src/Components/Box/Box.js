import React from "react";
import "./Box.scss";

export default function Box({ info, caption }) {
  return (
    <>
      <div className="box w-[258px] bg-[#FFFFFF] h-[134px] rounded-lg border #DFE0EB">
        <h3 className="box__info">{info}</h3>
        <h2 className="box__caption">{caption}</h2>
      </div>
    </>
  );
}
