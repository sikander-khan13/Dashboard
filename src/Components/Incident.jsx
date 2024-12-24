import React from 'react'
import { Link } from 'react-router-dom'
const cards = [
  {
    id: 1,
    title: "Whitechapel Rd.",
    location: "Tulare County, Los Angeles, CA 23415",
    price: "$1,456,654.00",
    image: "Img1.png", 
    badge: "Blizzard",
  },
  {
    id: 2,
    title: "Whitechapel Rd.",
    location: "Tulare County, Los Angeles, CA 23415",
    price: "$1,456,654.00",
    image: "Img2.png",
    badge: "Blizzard",
  },
  {
    id: 3,
    title: "Tulare County",
    location: "Tulare County, Los Angeles, CA 23415",
    price: "$1,456,654.00",
    image: "Img3.png",
    badge: "Blizzard",
  },
  {
    id: 4,
    title: "Tulare County",
    location: "Tulare County, Los Angeles, CA 23415",
    price: "$1,456,654.00",
    image: "Img4.png", 
    badge: "Blizzard",
  },
  {
    id: 5,
    title: "Tulare County",
    location: "Tulare County, Los Angeles, CA 23415",
    price: "$1,456,654.00",
    image: "Img5.png", 
    badge: "Blizzard",
  },
  {
    id: 6,
    title: "Tulare County",
    location: "Tulare County, Los Angeles, CA 23415",
    price: "$1,456,654.00",
    image: "Img6.png", 
    badge: "Blizzard",
  },
];


function Incident() {
  return (
    <>
      <div className='bg-[#E4E4E780] p-4 flex items-center justify-between'>
            <div className='ml-24'>
                <h3 className='text-[#71717A] text-[12px]'>Home - Incidents</h3>
                <h2 className='font-bold text-[26px]'>Incidents</h2>
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
                <Link to='/new-incident'>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">New Incident</button>
                </Link>
            </div>
        </div>
        {/*Dashboard Content*/}
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                {card.badge}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{card.title}</h2>
              <p className="text-gray-500 text-sm">{card.location}</p>
              <p className="text-orange-600 text-xl font-semibold mt-2">
                {card.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Incident;