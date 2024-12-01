import React from 'react';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';

const Homepage = () => {
  return (
    <div className='w-full min-h-screen bg-bgprimary'>
        <Navbar />
        <Slides />
      
    </div>
  )
}

export default Homepage;