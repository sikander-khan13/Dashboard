import React from 'react'
import { Link } from 'react-router-dom'

function Nextpage() {
  return (
    <>
        <div className='bg-[#E4E4E780] flex items-center justify-between px-6  py-3'>
        <div className='space-y-2'>
            <p className='text-[12px] text-[#71717A]'>Home - Incidents - New Incident</p>
            <h2 className='text-[#030712] text-[26px] font-bold'>New Incident</h2>
        </div>
        <div>
            <img src="Line1.png" alt="" />
        </div>
        <div className='space-x-3 md:flex'>
            <Link to='/get-started'>
                <button className='rounded-lg border px-[26px] py-[8px] bg-[#FAFAFA] hover:bg-red-950 hover:text-white'>Back</button>
            </Link>
            <Link to='/Finished'>
               <button className='border bg-[#F26922] text-white px-[25px] py-[8px] rounded-lg hover:bg-orange-900'>Next step</button>
            </Link>
        </div>
    </div>
    <div className="min-h-screen  flex flex-col items-center justify-start p-6">
      <div className="max-w-3xl w-full  p-8  rounded-md">
        <h1 className="text-xl md:text-[24px] font-bold text-[#09090B] mb-3">
          Let’s give the incident a title?
        </h1>
        <p className="text-gray-600 mb-4">
          Make a title that will easily identify the incidents
        </p>
        <input
          type="text"
          placeholder="Add title here"
          className="w-full p-3 border rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-8"
        />
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          Describe what happened during the incident?
        </h2>
        <p className="text-gray-600 mb-3">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          placeholder="Type here"
          rows="6"
          className="w-full p-3 border rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>

    </>
  )
}

export default Nextpage