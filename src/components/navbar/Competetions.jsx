import React from 'react';
import { Link } from 'react-router-dom';
import ExpandedCard from '../search/ExpandedCard'; // Import the ExpandedCard component
import { FaExclamationCircle } from 'react-icons/fa'; // Importing a colorful icon

// Mock data for competitions
const competitionsData = [
    {
        imageSrc: "https://images.unsplash.com/photo-1521747116042-5a810fda9664", // New Art Competition Image
        title: "Art Competition",
        link: "/competitions/art-competition"
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // New Craft Competition Image
        title: "Craft Competition",
        link: "/competitions/craft-competition"
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // New Music Competition Image
        title: "Music Competition",
        link: "/competitions/music-competition"
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // New Photography Competition Image
        title: "Photography Competition",
        link: "/competitions/photography-competition"
      },
  // Add more mock data as needed
];

const Competetions = () => {
  return (
    <div className='w-full'>
      {competitionsData.length === 0 ? ( // Check if there are no competitions
        <div className="empty-competitions py-[10vh] flex flex-col items-center justify-center text-center">
          <FaExclamationCircle className="text-6xl text-red-500 mb-4" /> {/* Colorful and huge icon */}
          <h2 className="text-xl font-semibold mb-2">No competitions found for you.</h2> {/* Personalized message */}
          <p className="text-gray-600 mb-4">We'll notify you when there are competitions for you. <b>Till then</b> </p> {/* Additional message */}
          <Link to="/competitions" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">Practice with our materials</Link> {/* Improved CTA button */}
        </div>
      ) : ( // Render competitions if they exist
        <>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl uppercase py-4'>Popular Competitions</h2>
            <Link className='text-base text-blue-600 font-semibold underline uppercase py-4'>View all competitions</Link>
          </div>
          <div className='expanded-cards-cont flex gap-8 py-4'>
            {competitionsData.slice(0, 4).map((competition, index) => (
              <ExpandedCard 
                key={index}
                imageSrc={competition.imageSrc} 
                title={competition.title} 
                link={competition.link} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Competetions;