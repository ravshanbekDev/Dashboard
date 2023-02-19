import React, { useState } from "react";
import Plus from "../../Images/plus.svg";
function TodoList() {
  const [tasks, setTasks] = useState([]);

  function handleTaskChange(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: event.target.task.value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    event.target.task.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            name="task"
            placeholder="Enter a task"
            className="w-[100%] pl-8 pr-8 mb-4 mt-[25px]"
          />
          <button type="submit" className="mr-8 rounded-lg bg-[#F0F1F7] w-6 h-6 flex items-center justify-center">
            <img src={Plus} alt="image"/>
          </button>
        </div>
        <hr className="border #DFE0EB min-w-100px" />
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="flex items-center justify-between pl-8 pr-8 pb-4 pt-4">
              <label className=" flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskChange(index)}
                  className="w-5 h-5 rounded-[50%] block"
                />
                <h2>{task.text}</h2>
              </label>
              <button
                onClick={() => handleDelete(index)}
                className=" rounded-lg bg-[#FEC400] text-[#fff] text-center py-[5px] px-[12px] "
              >
                Delete
              </button>
            </div>
            <hr className="border #DFE0EB w-[100%]" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
