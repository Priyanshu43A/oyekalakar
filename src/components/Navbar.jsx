import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Categories from './navbar/Categories';
import { IoArrowBackSharp, IoCloseSharp } from 'react-icons/io5';
import SearchComponent from './search/SearchComponent';

const Navbar = () => {

 const [currentHover, setcurrentHover] = useState('');
 const [isHover, setisHover] = useState(false);
 const expandedNavRef = useRef(null);
 const [isInputDisabled, setIsInputDisabled] = useState(true);
 const [searchTerm, setsearchTerm] = useState('');

 const recents = [
  // { name: 'Bracelets', url: '/bracelets' },
  // { name: 'Rings', url: '/rings' },
  // { name: 'Earrings', url: '/earrings' },
  // { name: 'Necklaces', url: '/necklaces' },
  // { name: 'Jewelry Sets', url: '/jewelry-sets' },
 ];

 const changeCurrentHover = (current)=>{
  setcurrentHover(current);
  setisHover(true);
 }

 useEffect(() => {
  if (expandedNavRef.current) {
   if (isHover) {
    const scrollHeight = expandedNavRef.current.scrollHeight;
    expandedNavRef.current.style.maxHeight = `${scrollHeight}px`;
   } else {
    expandedNavRef.current.style.maxHeight = '0';
   }
  }
 }, [isHover, currentHover]);

 useEffect(() => {
  if (!isInputDisabled && expandedNavRef.current) {
    const inputElement = expandedNavRef.current.querySelector('input');
    if (inputElement) {
      inputElement.focus();
    }
  }
}, [isInputDisabled]);

 const handleSearch = () => {
  if (!isInputDisabled) {
    // Save the search term to local storage
    if (searchTerm) {
      const searchLink = `https://yoursearchurl.com/search?q=${encodeURIComponent(searchTerm)}`;
      const recents = JSON.parse(localStorage.getItem('recents')) || [];
      recents.push({ name: searchTerm, url: searchLink });
      localStorage.setItem('recents', JSON.stringify(recents));
    }
    setIsInputDisabled(true);
    changeCurrentHover('');
    setsearchTerm('');
    setisHover(false);
  }
};

  return (
    <div onMouseLeave={()=>{
      if (isInputDisabled) {
        changeCurrentHover('');
        setisHover(false);
      }

    }} className="navbar relative bg-bgprimary flex flex-col gap-4">
      {!isInputDisabled && 
       <motion.div
       onClick={() => {
        if (!isInputDisabled) {
          setIsInputDisabled(true);
          changeCurrentHover('');
          setsearchTerm('');
          setisHover(false);
        }   
    }} 
        className="nav-close-btn text-3xl cursor-pointer rounded-full p-2 bg-[#dadada7c] absolute top-6 left-1/2 -translate-x-1/2">
       <IoCloseSharp />
       </motion.div>
       }
      <motion.div 
        className='nav-child-one' 
        initial={{ opacity: 0 }} 
        animate={{ opacity: isInputDisabled ? 1 : 0 }} 
        transition={{ duration: 0.3 }} 
        key={isInputDisabled} 
        style={{ visibility: isInputDisabled ? 'visible' : 'hidden' }}
      >
        <div className="menu-nav md:hidden flex justify-center item-center">
        <HiOutlineMenuAlt4 size={28} />
        </div>
      <div className="nav-links hidden md:flex justify-center item-center text-xs gap-4 w-fit">
        <div 
         onMouseOver={()=>{
          changeCurrentHover('categories');
          console.log(currentHover);
        }} className="link-item"><Link to="/categories">CATEGORIES</Link></div>
        <div className="link-item"><Link to="/events">EVENTS</Link></div>
        <div className="link-item"><Link to="/competitions">COMPETITIONS</Link></div>
        <div className="link-item"><Link to="/giveaway">GIVEAWAY</Link></div>
        <div className="link-item"><Link to="/workshops">WORKSHOPS</Link></div>
      </div>
      <div className="logo flex w-fit mx-auto text-2xl font-semibold text-heading cursor-pointer">
        <a href="/"><h1>OYE KALAKAR</h1></a>
      </div>
      <div className="other-nav-items flex items-center justify-center gap-2 ml-auto text-lg">
        <Link className='p-2 rounded-xl hover:bg-[#d1d1d1af] transition-bg duration-200 ease-in-out'><FaShoppingBag /></Link>
        <Link className='p-2 rounded-xl hover:bg-[#d1d1d1af] transition-bg duration-200 ease-in-out'><FaUser /></Link>
      </div>
      </motion.div>
     <div className="nav-search w-full rounded-full flex items-center text-xl px-2 py-1 gap-2" onClick={() => {
      if (isInputDisabled) {
        setIsInputDisabled(false);
        changeCurrentHover('search');

      }
    }}>
      <motion.div onClick={() => {
        if (!isInputDisabled) {
          setIsInputDisabled(true);
          changeCurrentHover('');
          setsearchTerm('');
          setisHover(false);
        }
        
    }} 
    
    className="search-icon p-2 rounded-2xl text-[#3c6d72] bg-[#fff] hover:bg-[#3c6d72] hover:text-white">
      {/* { isInputDisabled && (
        <BiSearchAlt size={24} />
      )} */}

      { isInputDisabled ?  <BiSearchAlt size={24} /> : <IoArrowBackSharp size={24} />}

      {/* { !isInputDisabled && (
        <IoArrowBackSharp size={24} />
      ) } */}

      </motion.div>
       <input 
           aria-disabled={isInputDisabled} 
           className='w-full cursor-pointer' 
           onChange={(e)=>{
            setsearchTerm(e.target.value);
           }}
           value={searchTerm}
           type="text" 
           placeholder={isInputDisabled ? "Search here..." : "start searching..."}
       />
       { !isInputDisabled && (
         <div className="search-icon p-2 rounded-2xl bg-[#3c6d72] text-white opacity-90 hover:opacity-100" onClick={handleSearch}>
           <BiSearchAlt size={24} />
         </div>
       )}
     </div>
      <div ref={expandedNavRef} className={`expanded-nav-cont ${isHover ? 'expand' : 'collapse'} border-b-2 border-gray-50`}>
             { currentHover == 'categories' ? <Categories isHover={isHover} /> : '' }
             { currentHover == 'search' ? <SearchComponent recents={recents} /> : '' }

      </div>
    </div>
  )
}

export default Navbar;