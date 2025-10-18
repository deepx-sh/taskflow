import React from 'react'

const TaskListInfo = () => {
  return (
      <div className='flex flex-wrap mt-10 justify-between gap-6'>
          <div className='flex-1 min-w-[200px] bg-[#1a1a1a] border border-emerald-600/30 rounded-2xl p-6 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300 transform hover:scale-[1.03]'>
              <h2 className='text-3xl font-bold text-emerald-400 mb-1'>0</h2>
              <h3 className='text-lg text-gray-300 font-medium'>New Task</h3>
          </div>
          
           <div className='p-10 rounded-xl  py-6 px-9 w-[45%] bg-green-400'>
              <h2 className='text-2xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>
           <div className='p-10 rounded-xl  py-6 px-9 w-[45%] bg-yellow-400'>
              <h2 className='text-2xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>
           <div className='p-10 rounded-xl  py-6 px-9 w-[45%] bg-blue-400'>
              <h2 className='text-2xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>
    </div>
  )
}

export default TaskListInfo