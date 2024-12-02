import React from 'react';
import { Link } from 'react-router-dom';
import ExpandedCard from '../search/ExpandedCard'; // Import the ExpandedCard component
import { FaExclamationCircle } from 'react-icons/fa'; // Importing a colorful icon

// Mock data for workshops
const workshopsData = [
  {
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Painting Workshop",
    link: "/workshops/painting"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Pottery Workshop",
    link: "/workshops/pottery"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c524d0f8c6c3",
    title: "Photography Workshop",
    link: "/workshops/photography"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Crafting Workshop",
    link: "/workshops/crafting"
  },
];

const Workshops = () => {
  return (
    <div className='w-full'>
      {workshopsData.length === 0 ? ( // Check if there are no workshops
        <div className="empty-workshops py-[10vh] flex flex-col items-center justify-center text-center">
            <FaExclamationCircle className="text-6xl text-red-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No workshops found.</h2>
            <p className="text-gray-600 mb-4">We'll notify you when there are workshops.</p>
            <Link to="/workshops" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">View Other Workshops</Link>
        </div>
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl uppercase py-4'>Upcoming Workshops</h2>
            <Link className='text-base text-blue-600 font-semibold underline uppercase py-4'>View all workshops</Link>
          </div>
          <div className='expanded-cards-cont flex gap-8 py-4'>
            {workshopsData.slice(0, 4).map((workshop, index) => (
              <ExpandedCard 
                key={index}
                imageSrc={workshop.imageSrc} 
                title={workshop.title} 
                link={workshop.link} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Workshops; 