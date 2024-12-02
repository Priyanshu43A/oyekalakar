import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon
import { div } from 'framer-motion/client';
import '../navbar/Categories.css';

const SearchComponent = () => {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    // Retrieve recent searches from local storage
    const savedRecents = JSON.parse(localStorage.getItem('recents')) || [];
    setRecents(savedRecents);
  }, []);
  
  const words = ["paintings", "custom gifts", "books", "clothing", "toys"]; // Array of 
  words
  const randomWord = words[Math.floor(Math.random() * words.length)]; // Select a random 
 

  return (
      <div className='flex h-full'>
    <div className='search-nav flex flex-col'>
      <h2 className='text-2xl uppercase py-4'>Recent Searches</h2>
      <div className='recent-searches flex flex-col gap-0'>
        {recents.length > 0 ? (
          recents.map((recent, index) => (
            <motion.div 
              key={index} 
              className='recent-search-item px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-300 transition duration-200 border-b-[1px] border-gray-200'
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <a href={recent.url}>
                <h3 className='text-xl'>{recent.name}</h3>
              </a>
            </motion.div>
          ))
        ) : (
          <motion.div 
            className='no-recent-searches flex items-center gap-2 p-4 rounded-lg bg-gray-200'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <FaSearch size={24} />
            <span>No recent searches. Try searching...</span>
          </motion.div>
        )}
      </div>
    </div>
    <div className='mx-auto'>
      <h2 className='text-2xl uppercase py-4'>Trending Searches</h2>
      <div className='expanded-cards-cont flex gap-16 py-4'>
  <div className='expaned-card cursor-pointer flex flex-col gap-2'>
      <div className="card-img overflow-hidden aspect-[2/2.5] w-[20vw] bg-blue-600 rounded-2xl">
              <img className='w-full transition-all duration-75 ease-in h-full object-cover hover:scale-110 rounded-2xl' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" alt="" />
      </div>
      <p className="card-title text-2xl pl-2">Costomizable feather</p>
      
  </div>
  <div className='expaned-card cursor-pointer flex flex-col gap-2'>
      <div className="card-img overflow-hidden aspect-[2/2.5] w-[20vw] bg-blue-600 rounded-2xl">
              <img className='w-full transition-all duration-75 ease-in h-full hover:scale-110 object-cover rounded-2xl' src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="" />
      </div>
      <p className="card-title text-2xl pl-2">Costomizable feather</p>
      
  </div>
 </div>
    </div>
    </div>
  );
};

export default SearchComponent;