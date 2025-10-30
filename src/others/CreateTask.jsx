import React, { useState } from 'react'

const CreateTask = () => {

  const [tasktitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    
    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    
  }
  return (
     <div className="mt-8  p-6 bg-[#111] rounded-2xl border border-emerald-700/30 shadow-[0_0_10px_rgba(16.185,129,0.1)]">
      <form onSubmit={(e) =>{
          submitHandler(e)
        }} className="flex flex-wrap gap-6 justify-between">
          <div className="w-full md:w-[48%] flex flex-col gap-4">
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Task Title</h3>
            <input value={tasktitle} onChange={(e) => {
              setTaskTitle(e.target.value)
              }} type="text" placeholder="Enter task title" className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" />
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-1">Date</h3>
              <input value={taskDate} onChange={(e) => {
              setTaskDate(e.target.value)
              }} type="date" className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"/>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-1">Assign to</h3>
              <input value={assignTo} onChange={(e) => {
              setAssignTo(e.target.value)
              }} type="text" placeholder="Assign to" className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"/>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-1">Category</h3>
              <input value={category} onChange={(e) => {
              setCategory(e.target.value)
              }} type="text" placeholder="Category" className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" />
            </div>
          </div>

          <div className="w-full md:w-[48%] flex flex-col gap-4">
            <h3 className="text-sm text-gray-400 mb-1">Description</h3>
          <textarea
            value={taskDesc} onChange={(e) => {
              setTaskDesc(e.target.value)
              }}
              cols={30}
              rows={10}
              placeholder="Enter Description"
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            ></textarea>
            <button type="submit" className="self-center bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_10px_rgba(16,185,129,0.4)]">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask