import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/landscape-placeholder.svg';
import fallbackImage from '../../assets/landscape-placeholder.svg';

const ExpandedCard = ({ imageSrc, title, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='expaned-card cursor-pointer flex flex-col gap-2'>
      <Link to={link}>
        <div className="card-img overflow-hidden aspect-[2/2.5] w-[20vw] rounded-2xl" style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}>
          <img 
            className='w-full transition-all duration-75 ease-in h-full object-cover hover:scale-110 rounded-2xl' 
            src={isLoading ? placeholder : imageSrc} 
            alt={title} 
            onLoad={() => setIsLoading(false)} 
            onError={() => setIsLoading(false)} 
          />
        </div>
      </Link>
      <p className="card-title text-sm md:text-2xl pl-2">{title}</p>
    </div>
  );
};

export default ExpandedCard; 