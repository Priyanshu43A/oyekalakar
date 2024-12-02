import React from 'react';
import { Link } from 'react-router-dom';
import ExpandedCard from '../search/ExpandedCard'; // Import the ExpandedCard component
import { FaExclamationCircle } from 'react-icons/fa'; // Importing a colorful icon

// Mock data for events
const eventsData = [
  {
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Art Exhibition",
    link: "/events/art-exhibition"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Craft Workshop",
    link: "/events/craft-workshop"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c524d0f8c6c3",
    title: "Music Concert",
    link: "/events/music-concert"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Photography Contest",
    link: "/events/photography-contest"
  },
  // Add more mock data as needed
];

const Events = () => {
  return (
    <div className='w-full'>
      {eventsData.length === 0 ? ( // Check if there are no events
        <div className="empty-events py-[10vh] flex flex-col items-center justify-center text-center">
            <FaExclamationCircle className="text-6xl text-red-500 mb-4" /> {/* Colorful and huge icon */}
            <h2 className="text-xl font-semibold mb-2">No events found near you.</h2> {/* Personalized message */}
            <p className="text-gray-600 mb-4">We'll notify you when there are events.</p> {/* Additional message */}
            <Link to="/events" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">View Other Events</Link> {/* Improved CTA button */}
        </div>
      ) : ( // Render events if they exist
        <>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl uppercase py-4'>Events near you</h2>
            <Link className='text-base text-blue-600 font-semibold underline uppercase py-4'>View all events</Link>
          </div>
          <div className='expanded-cards-cont flex gap-8 py-4'>
            {eventsData.slice(0, 4).map((event, index) => (
              <ExpandedCard 
                key={index}
                imageSrc={event.imageSrc} 
                title={event.title} 
                link={event.link} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Events;
