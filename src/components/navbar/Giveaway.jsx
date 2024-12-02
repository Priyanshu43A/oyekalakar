import React from 'react';
import { Link } from 'react-router-dom';
import ExpandedCard from '../search/ExpandedCard'; // Import the ExpandedCard component
import { FaExclamationCircle } from 'react-icons/fa'; // Importing a colorful icon

// Mock data for giveaways
const giveawaysData = [
  {
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Art Supplies Giveaway",
    link: "/giveaway/art-supplies"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Craft Kit Giveaway",
    link: "/giveaway/craft-kit"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c524d0f8c6c3",
    title: "Music Instruments Giveaway",
    link: "/giveaway/music-instruments"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Photography Gear Giveaway",
    link: "/giveaway/photography-gear"
  },
];

const Giveaway = () => {
  return (
    <div className='w-full'>
      {giveawaysData.length === 0 ? ( // Check if there are no giveaways
        <div className="empty-giveaways py-[10vh] flex flex-col items-center justify-center text-center">
            <FaExclamationCircle className="text-6xl text-red-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No giveaways found.</h2>
            <p className="text-gray-600 mb-4">We'll notify you when there are giveaways.</p>
            <Link to="/giveaway" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">View Other Giveaways</Link>
        </div>
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl uppercase py-4'>Current Giveaways</h2>
            <Link className='text-base text-blue-600 font-semibold underline uppercase py-4'>View all giveaways</Link>
          </div>
          <div className='expanded-cards-cont flex gap-8 py-4'>
            {giveawaysData.slice(0, 4).map((giveaway, index) => (
              <ExpandedCard 
                key={index}
                imageSrc={giveaway.imageSrc} 
                title={giveaway.title} 
                link={giveaway.link} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Giveaway; 