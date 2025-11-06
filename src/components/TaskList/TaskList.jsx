import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data,onAccept,onComplete,onFail }) => {
  
  
  return (
    <div
      id="tasklist"
      className="h-auto sm:h-[55%] mt-10 py-5 px-5 w-full  flex items-start gap-5 flex-nowrap overflow-x-auto scroll-smooth"
    >
      {data.tasks.length == 0 ? (
        <div className="w-full text-center py-10 text-gray-400">
          No tasks assigned yet
        </div>
      ) : (
          data.tasks.map((task,idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={ task} onComplete={onComplete} onFail={onFail} />
        }

        if (task.newTask) {
          return <NewTask key={idx} data={task} onAccept={onAccept} />
        }

        if (task.completed) {
          return <CompleteTask key={idx} data={ task}/>
        }

        if (task.failed) {
          return <FailedTask key={idx} data={ task}/>
        }
     })
      )}
    </div>
  );
};

export default TaskList;
