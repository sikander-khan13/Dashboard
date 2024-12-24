import React from 'react'
import { Link } from 'react-router-dom'

function Newincident() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
    <h1 className="text-[32px] font-bold text-[#09090B] mb-2">Let’s get started</h1>
    <p className="text-[#71717A] text-center max-w-md mb-6">
      Lorem ipsum dolor sit general sac mascho werhoLorem ipsum dolor sit general sac mascho werhoLorem ipsum dolor sit gene
    </p>
    <div className='mt-3 mb-3'>
       <img src="Line.png" alt="" />
    </div>
    
    {/* Incident Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-4">
      {/* Step 1 */}
      <div className="p-4 bg-[#F4F4F5] rounded shadow hover:shadow-lg transition">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full">
            <img src="Frame3.png" alt="Type of Incident" />
          </div>
        </div>
        <h3 className="text-[20px] font-bold text-gray-800 pt-5">What type of <br /> incident?</h3>
        <p className="text-sm text-gray-600 mt-2">
          Choose the category that best describes the incident.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-4 bg-[#F4F4F5] rounded shadow hover:shadow-lg transition">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full">
            <img src="Frame2.png" alt="Details" />
          </div>
        </div>
        <h3 className="text-[20px] font-bold text-gray-800 pt-5">Tell us about the <br /> incident?</h3>
        <p className="text-sm text-gray-600 mt-2">
          Let’s connect the dots and see where to start.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-4 bg-[#F4F4F5] rounded shadow hover:shadow-lg transition">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full">
            <img src="Frame4.png" alt="Incident Location" />
          </div>
        </div>
        <h3 className="text-[20px] font-bold text-gray-800 pt-5">Where did the <br /> incident occur?</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit general sac mascho werho.
        </p>
      </div>
    </div>

    {/* Get Started Button */}
    <Link to='/get-started'>
        <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
          Get started
        </button>
    </Link>
  </div>
  )
}

export default Newincident;