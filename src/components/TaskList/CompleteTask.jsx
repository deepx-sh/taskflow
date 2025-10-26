import React from 'react'

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 w-[280px]  rounded-2xl sm:w-[300px] bg-gray-700 p-5 shadow-lg hover:scale-[1.03] transition-transform duration-300">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wide">High</h3>
          <h4 className="text-[10px] sm:text-xs text-gray-200">16 Oct 2025</h4>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mt-4 text-white leading-snug">Make a Project</h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-100/90 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam enim reiciendis error soluta obcaecati odio culpa sint quis unde. Natus doloribus nulla odit debitis obcaecati eaque repellendus laborum repellat.</p>
          <div className='mt-2'>
              <button className='w-full'>Complete</button>
      </div>
      </div>
  )
}

export default CompleteTask