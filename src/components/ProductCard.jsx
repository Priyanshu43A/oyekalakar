import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaGift, FaCartPlus, FaCashRegister } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { image, brand, title, price, discount, freeShipping, freeGift, cod } = product;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="max-w-xs flex flex-col bg-white rounded-lg p-0 relative"
    >
      {/* Product Image */}
      
     <div className="productImage overflow-hidden rounded-lg relative w-full h-full max-h-[428px] min-w-64 aspect-[3/3.5]">
     <Link>  
     <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      /> 
      </Link>

        <button className="p-2 flex items-center justify-center rounded-full absolute bottom-2 right-2 bg-gray-300 hover:bg-green-700 hover:text-white transition-all duration-300"><FiShoppingCart /></button>
      </div>
      {/* Product Details */}
      <div className="pl-1 pr-4 pb-4">
        {/* <h3 className="text-xl  text-gray-800">{brand}</h3> */}
        <p className="text-sm text-gray-600 mt-1 truncate">{title.length > 50 ? title.slice(0, 50) + '...' : title}</p>

        {/* Price */}
        <div className="flex items-center mt-2">
          <div className="text-2xl font-semibold text-black">${price}</div>
          {discount && (
            <div className="ml-6 scale-75 font-semibold border-2 border-dashed border-red-500 text-red-500 text-sm px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Extra Info */}
        <div className="flex w-full text-nowrap items-center justify-start gap-4 text-sm text-purple-700 font-semibold mt-4">
          {freeShipping && (
            <div className="flex items-center">
              <FaTruck className="mr-1" />
              <span className="inline">Free shipping</span>
            </div>
          )}
          {freeGift && (
            <div className="flex items-center">
              <FaGift className=" mr-1" />
              <span className="inline">Free gift</span>
            </div>
          )}
          {cod && (
            <div className="flex items-center">
              <BsCashCoin className=" mr-1" />
              <span className="inline">COD</span>
            </div>
          )}
        </div>

        {/* Call-to-Action Button */}
        {/* <div className="flex gap-4 self-end mt-6">
          <button
            className={`bg-green-600 text-nowrap whitespace-nowrap overflow-hidden text-white py-2 rounded-md flex gap-2 items-center justify-center transition-all duration-300 ${isHovered ? 'w-12' : 'w-full'}`}
            onClick={product.onViewDeal}
          >
            <MdOutlineShoppingBag size={22} />
            <span className={`text-sm my-auto font-semibold ${isHovered ? 'hidden' : 'inline'}`}>Buy now</span>
          </button>
          <button
            className={`bg-green-600 text-nowrap whitespace-nowrap overflow-hidden text-white py-2 rounded-md flex gap-2 items-center justify-center transition-all duration-300 ${isHovered ? 'w-full' : 'w-14'} group`}
            onClick={product.onViewDeal}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaCartPlus size={22} />
            <span className={`text-sm my-auto font-semibold ${isHovered ? 'inline' : 'hidden'}`}>Add to Cart</span>
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProductCard;
