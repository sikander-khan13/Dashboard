import React, { useState } from "react";

function Dashboard() {
  return (
    <>
        <header className='bg-gray-100 text-sm md:text-xl'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6'>
            <div className="flex items-start sm:visible">
                <img className="sm:w-9 md:w-full" src="Logo.png" alt="" />
            </div>
            <nav className=' md:flex space-x-4'>
                <a href="/"  className="text-gray-700 hover:text-orange-600 font-medium">Dashboard</a>
                <a href="/Incidents" className="text-gray-700 hover:text-orange-600 font-medium">Incidents</a>
                <a href="/locations" className="text-gray-700 hover:text-orange-600 font-medium">Locations</a>
                <a href="/activities" className="text-gray-700 hover:text-orange-600 font-medium">Activities</a>
                <a href="/documents" className="text-gray-700 hover:text-orange-600 font-medium">Documents</a>
                <a href="cypher-ai" className="text-gray-700 hover:text-orange-600 font-medium">Cypher AI</a>
            </nav>
            <div className='flex md:flex-row flex-col items-center space-x-2 md:px-3 px-6'>
                <img src="Group12.png" alt="" />
                <img src="Rectangle12.png" alt="" />
                <div className="md:text-lg text-sm">
                    <h3>Usman Zafar</h3>
                    <p className="md:text-lg text-sm">usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Dashboard