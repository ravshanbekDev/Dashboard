import React from "react";
import "./Trends.scss";

export default function Trends({ caption, info }) {
  return (
    <>
      <div className="trends">
        <h3 className="trends__caption">{caption}</h3>
        <h2 className="trends__info">{info}</h2>
      </div>
    </>
  );
}
