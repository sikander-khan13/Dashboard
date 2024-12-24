import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Getstart() {
    const [selectedIncident, setSelectedIncident] = useState("");

    const incidentTypes = [
        "Avalanche",
        "Biological",
        "Blizzard",
        "Cold/Freezing",
        "Drought",
        "Earthquake",
        "Flooding",
        "Heat Wave",
        "Hail",
        "Lightning",
        "Man Made",
        "Mudslide",
        "Severe Storm",
        "Strong Wind",
        "Tornado",
        "Tsunami",
        "Volcanic Eruption",
        "Wildfire",
      ];
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
            <Link to='/new-incident'>
                 <button className='rounded-lg border px-[26px] py-[8px] bg-[#FAFAFA] hover:bg-red-950 hover:text-white'>Back</button>
            </Link>
            <Link to='/next-step'>
                <button className='border bg-[#F26922] text-white px-[25px] py-[8px] rounded-lg hover:bg-orange-900'>Next step</button>
            </Link>
        </div>
    </div>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center mt-5">
        Which of these best describes the incident?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
        {incidentTypes.map((incident) => (
          <button
            key={incident}
            className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium 
              ${
                selectedIncident === incident
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              } transition`}
            onClick={() => setSelectedIncident(incident)}
          >
            {incident}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default Getstart;