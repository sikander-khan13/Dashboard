import React, {useState} from 'react'
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
  
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className='bg-[#E4E4E780] p-4 flex items-center justify-between'>
            <div className='ml-24'>
                <h3 className='text-[#71717A] text-[12px]'>Welcome back</h3>
                <h2 className='font-bold text-[26px]'>Dashboard</h2>
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
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Cypher AI</button>
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
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-orange-500 text-white text-xl font-bold rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 focus:outline-none"
      >
        C
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 max-h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between bg-orange-500 text-white px-4 py-2 rounded-t-lg">
            <span className="font-semibold">Chat with Cypher</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold focus:outline-none"
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto text-sm">
            <p>Welcome! How can I assist you?</p>
          </div>

          {/* Chat Footer */}
          <div className="flex items-center p-3 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
            />
            <button className="ml-2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow hover:bg-orange-600 focus:outline-none">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
    
    </>
  )
}

export default Home