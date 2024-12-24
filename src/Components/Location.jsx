import React, {useState} from 'react'
const locations = [
    {
      id: 1,
      image: 'Old.png', 
      title: 'Whitechapel Rd.',
      location: 'Tulare County, Los Angeles, CA 23415',
      price: '$1,456,654.00',
      badge: 'Building',
    },
    {
      id: 2,
      image: 'New.png',
      title: 'Whitechapel Rd.',
      location: 'Tulare County, Los Angeles, CA 23415',
      price: '$1,456,654.00',
      badge: 'Building',
    },
    {
      id: 3,
      image: 'Old.png', 
      title: 'Whitechapel Rd.',
      location: 'Tulare County, Los Angeles, CA 23415',
      price: '$1,456,654.00',
      badge: 'Building',
    },
    {
      id: 4,
      image: 'Old.png', 
      title: 'Whitechapel Rd.',
      location: 'Tulare County, Los Angeles, CA 23415',
      price: '$1,456,654.00',
      badge: 'Building',
    },
  ];

  const sections = [
    {
      id: 1,
      title: 'Activities',
      items: [
        {
          id: 1,
          image: 'Old.png', // Replace with the correct image URL
          name: 'Activity name',
          location: 'Location name • 16.12212, -122.1424',
          price: '$1,456,654.00',
        },
        {
          id: 2,
          image: 'Old.png', // Replace with the correct image URL
          name: 'Activity name',
          location: 'Location name • 16.12212, -122.1424',
          price: '$1,456,654.00',
        },
      ],
    },
    {
      id: 2,
      title: 'Documents',
      items: [
        {
          id: 1,
          image: 'Old.png', // Replace with the correct image URL
          name: 'Document name',
          location: 'Location name • 16.12212, -122.1424',
          price: '$1,456,654.00',
        },
        {
          id: 2,
          image: 'Old.png', // Replace with the correct image URL
          name: 'Document name',
          location: 'Location name • 16.12212, -122.1424',
          price: '$1,456,654.00',
        },
      ],
    },
  ];
function Location() {

    
  return (
    <>
        <div className='bg-[#E4E4E780] p-4 flex items-center justify-between'>
            <div className='ml-24'>
                <h3 className='text-[#71717A] text-[12px]'>Incidents - DR-4699 March 2023 Severe Storms </h3>
                <div className='flex space-x-3'>
                    <img src="umb.png" alt="" />
                    <h2 className='font-bold text-[26px]'>DR-4699 March 2023 Severe Storms</h2>
                </div>
            </div>

            <div className='flex items-center space-x-6 mr-24'>
                <div className='hidden md:flex items-center space-x-2'>
                    <input type="text" placeholder='Search incident' className='border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-orange-500 focus:border-orange-500' />
                    <select className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:ring-orange-500 focus:border-orange-500'>
                        <option >Sort By: Date modified</option>
                        <option >Sort By: Name</option>
                        <option >Sort By: Priority</option>
                    </select>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">New Incident</button>
            </div>
        </div>
        <div className='container p-7 flex md:flex-row flex-col gap-5'>
            <div className='p-7'>
                <div className='p-6 space-y-5'>
                    <div className='flex gap-3'>
                        <img src="LC.png" alt="" />
                        <div>
                            <p className='text-[#6B7280] text-[14px]'>Location</p>
                            <h3 className='text-[20px] font-bold'>Tulare County,  Los Angles, CA 23415</h3>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src="BD.png" alt="" />
                        <div>
                            <p className='text-[#6B7280] text-[14px]' >Approx. Cost:</p>
                            <h3 className='text-[20px] font-bold'>$60,607,456.00</h3>
                        </div>
                    </div>
                </div>
                <div className='pl-8'>
                    <img src="Line03.png" alt="" />
                </div>
                <div className=" p-6">
                    <h2 className="text-lg font-semibold mb-4">Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                   </p>
               </div>
                <div className='pl-8'>
                    <img src="Line03.png" alt="" />
                </div>
                <div className="min-h-screen p-6">
                 <h2 className="text-2xl font-semibold mb-4">Locations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {locations.map((location) => (
                  <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                   <div className="relative">
                 <img
                src={location.image}
                alt={location.title}
                className="w-full h-48 object-cover"
                />
              <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                {location.badge}
              </span>
            </div>
            <div className="p-4">
               <h3 className="font-semibold text-lg">{location.title}</h3>
               <p className="text-sm text-gray-500">{location.location}</p>
               <p className="text-lg font-bold mt-2">{location.price}</p>
             </div>
             </div>
             ))}
             </div>
             </div>
             <div className=" min-h-screen p-6 space-y-8">
              {sections.map((section) => (
           <div key={section.id}>
             <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <button className="text-blue-600 text-sm">See all</button>
            </div>
            <div className="space-y-4">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.location}</p>
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
            </div>
            </div>
            ))}
            </div>

            </div>

            <div className='space-y-3'>
                <p className='text-[#71717A] text-[14px]'>Incident Map</p>
                <div>
                    <img className='w-[526px] h-[503px] rounded-md' src="Map2.png" alt="" />
                </div>
                <p className='text-[#71717A] text-[14px]'>Start 19.1232, -118.233 End 19.3245, -119.2323</p>
            </div>
        </div>
    </>
  )
}

export default Location