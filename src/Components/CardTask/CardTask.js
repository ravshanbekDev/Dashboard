import React from "react";
import TextTop from "../TextTop/TextTop";
import TodoList from "../Todo/Todo";

export default function CardTask() {
  return (
    <div className="rounded-lg bg-[#fff] border #DFE0EB  max-w-[546px]">
      <TextTop caption={"Tasks"} info={"View all"} title={"Today"} />
      <TodoList/>
    </div>
  );
}
