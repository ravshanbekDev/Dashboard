import React from "react";
import Text from "./Text/Text";
import TextTop from "./TextTop/TextTop";

export default function Card() {
  return (
    <div className="rounded-lg bg-[#fff] border #DFE0EB  max-w-[546px]">
      <TextTop
        caption={"Unresolved tickets"}
        info={"View details"}
        title={"Group:"}
        description={"Support"}
      />
      <Text caption={"Waiting on Feature Request"} info={"4238"} />
      <hr className="border #DFE0EB min-w-100px" />
      <Text caption={"Awaiting Customer Response"} info={"1005"} />
      <hr className="border #DFE0EB min-w-100px" />
      <Text caption={"Awaiting Developer Fix"} info={"914"} />
      <hr className="border #DFE0EB min-w-100px" />
      <Text caption={"Pending"} info={"281"} />
    </div>
  );
}
