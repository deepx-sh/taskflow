import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data}) => {
  return (
    <div
      id="tasklist"
      className="h-auto sm:h-[55%] mt-10 py-5 px-5 w-full  flex items-start gap-5 flex-nowrap overflow-x-auto scroll-smooth"
    >
      {data.tasks.map((task) => {
        if (task.active) {
          return <AcceptTask/>
        }

        if (task.newTask) {
          return <NewTask/>
        }

        if (task.completed) {
          return <CompleteTask/>
        }

        if (task.failed) {
          return <FailedTask/>
        }
     })}
    </div>
  );
};

export default TaskList;
