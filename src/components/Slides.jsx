import React, { useState, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

// Mock data
const slidesData = [
  {
    image: "https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-3862.jpg",
    link: "#",
    title: "Flat 50% off",
    buttonText: "Buy now"
  },
  {
    image: "https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp",
    link: "#",
    title: "Our Best artist",
    buttonText: "Book now"
  },
  {
    image: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg",
    link: "#day",
    title: "Product of the day",
    buttonText: "Buy now"
  },
  {
    image: "https://www.shutterstock.com/image-vector/ad-banner-natural-beauty-products-260nw-1780339220.jpg",
    link: "#",
    title: "Biggest giveaway",
    buttonText: "Participate now"
  },
  // Add more slides as needed
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  // Automatic slideshow functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='mx-auto mt-[18vh] md:mt-[22vh] w-[90%]' {...handlers}>
      <div className='slide overflow-hidden aspect-[16/6] rounded-2xl bg-purple-800 min-h-[456px] w-full'>
        <div className="slide-child h-full" style={{ display: 'flex', transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {slidesData.map((slide, index) => (
            <a href={slide.link} key={index} style={{ minWidth: '100%' }}>
              <img className='w-full h-full object-cover' src={slide.image} alt={slide.title} />
            </a>
          ))}
        </div>
      </div>
      <div className='slide-navs flex-col-reverse md:flex-row md:pt-0 pt-2 px-2 flex items-start md:justify-between md:items-center gap-2 md:gap-0'>
        <div className="slide-info pt-2">
          <motion.div key={currentIndex}>
            <motion.h2
              className='md:text-4xl text-2xl'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {slidesData[currentIndex].title}
            </motion.h2>
            <motion.button
              className="bg-sky-500 mt-4 md:mt-2 hover:bg-sky-700 text-white font-bold py-2 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {slidesData[currentIndex].buttonText}
            </motion.button>
          </motion.div>
        </div>
        <div className="btns text-2xl md:text-4xl flex items-center justify-between gap-4">
          <motion.button 
            className="prev-btn bg-gray-300 rounded-full p-2 shadow-md" 
            onClick={prevSlide} 
            whileTap={{ scale: 0.9 }} // Scale down on tap
            transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
          >
            <GrFormPrevious />
          </motion.button>
          <motion.button 
            className="next-btn bg-gray-300 rounded-full p-2 shadow-md" 
            onClick={nextSlide} 
            whileTap={{ scale: 0.9 }} // Scale down on tap
            transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
          >
            <GrFormNext />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Slides;