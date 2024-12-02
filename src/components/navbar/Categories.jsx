import React from 'react';
import { Link } from 'react-router-dom';
import ExpandedCard from '../search/ExpandedCard';
import './Categories.css';

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
  {
    imageSrc: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    title: "Costomizable paintings",
    link: "/customizable-paintings"
  },
  {
    imageSrc: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    title: "Costomizable paintings",
    link: "/customizable-paintings"
  },
  // Add more mock data as needed
];

const Categories = (isHover) => {
  return (
    <div className='category-nav flex justify-between'>
      <div className='expanded-nav-links flex flex-col text-2xl gap-6 uppercase py-4'>
        <a href="#">
          <h2>Bracelets</h2>
        </a>
        <a href="#">
          <h2>Keychains</h2>         
        </a>
        <a href="#">
          <h2>paintings</h2>         
        </a>
        <a href="#">
          <h2>portrait</h2>          
        </a>
        <a href="#">
          <h2>frames</h2>          
        </a>
        <a href="#">
          <h2>rangoli</h2>    
        </a>
      </div>
      <div className='expanded-cards-cont flex gap-16 py-4'>
        {trendingSearches.slice(0, 2).map((search, index) => (
          <ExpandedCard 
            key={index} // Use index as key for simplicity (consider using a unique ID in real scenarios)
            imageSrc={search.imageSrc} 
            title={search.title} 
            link={search.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;