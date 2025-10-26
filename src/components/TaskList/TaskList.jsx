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
      {data.tasks.map((task,idx) => {
        if (task.active) {
          return <AcceptTask  key={idx}/>
        }

        if (task.newTask) {
          return <NewTask key={idx}/>
        }

        if (task.completed) {
          return <CompleteTask key={idx}/>
        }

        if (task.failed) {
          return <FailedTask key={idx}/>
        }
     })}
    </div>
  );
};

export default TaskList;
