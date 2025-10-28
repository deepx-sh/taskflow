import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProviderContext';

const AllTask = () => {
    const authData = useContext(AuthContext);
    console.log(authData.employees);
    
  return (
      <div id='tasklist' className='bg-[#111] p-6 mt-6 rounded-2xl   border border-emerald-700/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]'>
          <div  className='hidden md:flex bg-[#181818] mb-3 py-3 px-4 justify-between items-center border border-emerald-600/40 rounded-lg'>
                  <h5 className='text-emerald-400 font-semibold w-1/5 text-center text-sm uppercase tracking-wide'>Employee Name</h5>
              <h5 className='text-emerald-400 font-semibold w-1/5 text-center text-sm uppercase tracking-wide'>New Task</h5>
              <h5 className='text-emerald-400 font-semibold w-1/5 text-center text-sm uppercase tracking-wide'>Active Task</h5>
              <h5 className='text-emerald-400 font-semibold w-1/5 text-center text-sm uppercase tracking-wide'>Completed</h5>
              <h5 className='text-emerald-400 font-semibold w-1/5 text-center text-sm uppercase tracking-wide'>Failed</h5>
          </div>
          <div  id='tasklist' className='flex flex-col gap-3'>
               {authData.employees.map((emp, idx) => (
              <div key={idx} className='bg-[#1a1a1a] py-3 px-4 border border-emerald-700/30 rounded-xl hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300'>
                   <div className='hidden md:flex justify-between items-center'>
                     <h5 className='text-gray-300 font-medium w-1/5 text-center truncate'>{ emp.firstName}</h5>
                       <h3 className='text-gray-200 font-semibold w-1/5 text-center'><span className='bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full text-sm'>{ emp.taskCount.newTask}</span></h3>
                  <h5 className='text-gray-200 font-semibold w-1/5 text-center'><span className='bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-sm'>{ emp.taskCount.active}</span></h5>
                  <h5 className='text-gray-200 font-semibold w-1/5 text-center'><span className='bg-emerald-600/30 text-emerald-400 px-3 py-1 rounded-full text-sm'>{ emp.taskCount.completed}</span></h5>
                  <h5 className='text-gray-200 font-semibold w-1/5 text-center'><span className='bg-red-600/30 text-red-400 px-3 py-1 rounded-full text-sm'>{ emp.taskCount.failed}</span></h5>
                   </div>
                   
                   <div className='flex flex-col gap-2 md:hidden'>
                     <h2 className='text-gray-100 font-semibold text-lg'>{emp.firstName}</h2>
                     
                     <div className='flex flex-wrap gap-2'>
                       <span className='bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full text-xs font-medium'>New: {emp.taskCount.newTask}</span>
                       
                       <span className='bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium'>Active: {emp.taskCount.active}</span>
                       

                       <span className='bg-emerald-600/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium'>Completed: {emp.taskCount.completed}</span>
                       

                       <span className='bg-red-600/30 text-red-400 px-3 py-1 rounded-full text-xs font-medium'>Failed: { emp.taskCount.failed}</span>
                     </div>
                   </div>
          </div>
          ))}
         </div>
          
    </div>
  )
}

export default AllTask