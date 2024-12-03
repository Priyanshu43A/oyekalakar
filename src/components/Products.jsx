import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import ProductCard from './ProductCard';
import "../styles/Navbar.css";

const Products = ({ heading, link, productData }) => {
  const validProductData = Array.isArray(productData) ? productData : [];
  const scrollRef = useRef(null);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 700, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -700, behavior: 'smooth' });
    }
  };

  return (
    <div className='w-[90%] mx-auto mt-10 py-10'>
      <div className='flex items-center justify-between mb-8 md:mb-2'>
        <h1 className='text-xl md:text-3xl font-semibold md:font-bold'>{heading}</h1>
        <Link to={link} className='flex items-center gap-1'>View all<MdKeyboardArrowRight size={24} /></Link>
      </div>
      <div className='hidden md:flex justify-end gap-4 items-center mb-4 md:mb-0'>
          <button onClick={handlePrev} className='bg-gray-100 p-1 rounded-full flex items-center'>
            <MdKeyboardArrowLeft size={32} />
          </button>
          <button onClick={handleNext} className='bg-gray-100 p-1 rounded-full flex items-center'>
            <MdKeyboardArrowRight size={32} />
          </button>
        </div>
      <div className='relative'>
        <div ref={scrollRef} className='flex overflow-x-auto scrollbar-hide pl-4 pt-4 gap-8'>
          {validProductData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default Products;