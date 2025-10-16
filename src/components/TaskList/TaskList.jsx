import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] mt-10 py-5 px-5 w-full  flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      <div className="flex-shrink-0 h-full rounded-xl w-[300px] bg-emerald-600 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">16 Oct 2025</h4>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Make a Project</h2>
        <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam enim reiciendis error soluta obcaecati odio culpa sint quis unde. Natus doloribus nulla odit debitis obcaecati eaque repellendus laborum repellat.</p>
      </div>
    </div>
  );
};

export default TaskList;
