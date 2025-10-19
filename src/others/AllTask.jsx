import React from 'react'

const AllTask = () => {
  return (
      <div id='tasklist' className='bg-[#111] p-5 mt-6 rounded-2xl h-60 overflow-y-auto border border-emerald-700/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]'>
          <div className='bg-[#1a1a1a] mb-3 py-3 px-4 flex justify-between items-center border border-yellow-500/40  rounded-lg hover:shadow-[0_0_15px_rgba(234,179,8,0.25)] transition-all duration-300'>
              <h2 className='text-gray-300 font-medium'>Deep</h2>
              <h3 className='text-gray-200 font-semibold'>Make a UI Design</h3>
              <h5 className='text-yellow-400 font-semibold text-sm'>Status</h5>
          </div>

          <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
              <h2>Deep</h2>
              <h3>Make a UI Design</h3>
              <h5>Status</h5>
          </div>

          <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
              <h2>Deep</h2>
              <h3>Make a UI Design</h3>
              <h5>Status</h5>
          </div>

          <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
              <h2>Deep</h2>
              <h3>Make a UI Design</h3>
              <h5>Status</h5>
          </div>
          
    </div>
  )
}

export default AllTask