import React from 'react'
import { Link } from 'react-router-dom'

function Finished() {
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
            <Link to='/next-step'>
                <button className='rounded-lg border px-[26px] py-[8px] bg-[#FAFAFA] hover:bg-red-950 hover:text-white'>Back</button>
            </Link>
            <button className='border bg-[#F26922] text-white px-[25px] py-[8px] rounded-lg hover:bg-orange-900'>Finished</button>
        </div>
      </div>

      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Title and Description */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Where's the incident?</h1>
        <p className="text-gray-600">
          Enter a GPS, address, or pinpoint on the map. Try to be as accurate as possible.
        </p>
      </div>

      

      {/* Static Map Image */}
      <div className="w-full max-w-2xl">
        <img
          src="Map.png" 
          alt="Map"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>

    </>
  )
}

export default Finished