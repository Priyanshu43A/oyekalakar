import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUser } from 'react-icons/fa';


import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Categories from './navbar/Categories';

const Navbar = () => {

 const [currentHover, setcurrentHover] = useState('');
 const [isHover, setisHover] = useState(false);
 const expandedNavRef = useRef(null);

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

  return (
    <div onMouseLeave={()=>{
      changeCurrentHover('');
      setisHover(false);

    }} className="navbar bg-bgprimary flex flex-col gap-4">
      <div className='nav-child-one'>
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
      </div>
     <div className="nav-search w-full rounded-full flex items-center text-xl px-2 py-1 gap-2">
      <div className="search-icon p-2 rounded-2xl text-[#3c6d72] bg-[#fff] hover:bg-[#3c6d72] hover:text-white">
        <BiSearchAlt size={24} />
      </div>
       <input disabled className='w-full cursor-pointer' type="text" placeholder="Search here..." />
       <div className="search-icon p-2 rounded-2xl bg-[#3c6d72] text-white opacity-90 hover:opacity-100 hidden">
        <BiSearchAlt size={24} />
      </div>
     </div>
      <div ref={expandedNavRef} className={`expanded-nav-cont ${isHover ? 'expand' : 'collapse'}`}>
             { currentHover == 'categories' ? <Categories isHover={isHover} /> : '' }
      </div>
    </div>
  )
}

export default Navbar;