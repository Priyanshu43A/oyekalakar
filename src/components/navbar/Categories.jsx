import React from 'react';
import './Categories.css';

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
  )
}

export default Categories;