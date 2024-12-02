import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import ExpandedCard from './ExpandedCard';
import '../navbar/Categories.css';

// Mock data for trending searches
const trendingSearches = [
  {
    imageSrc: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    title: "Costomizable feather",
    link: "/customizable-feather"
  },
  {
    imageSrc: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    title: "Costomizable paintings",
    link: "/customizable-paintings"
  },
  // Add more mock data as needed
];

const SearchComponent = () => {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const savedRecents = JSON.parse(localStorage.getItem('recents')) || [];
    setRecents(savedRecents);
  }, []);
  
  return (
    <div className='flex flex-col md:flex-row max-screen h-full'>
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
      <div className='ml-auto'>
        <h2 className='text-2xl uppercase py-4'>Trending Searches</h2>
        <div className='expanded-cards-cont flex gap-16 py-4'>
          {trendingSearches.slice(0, 2).map((search, index) => ( // Limit to the first 2 cards
            <ExpandedCard 
              key={index}
              imageSrc={search.imageSrc} 
              title={search.title} 
              link={search.link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;