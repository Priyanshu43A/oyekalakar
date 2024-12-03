import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaGift, FaCartPlus, FaCashRegister } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { image, brand, title, price, discount, freeShipping, freeGift, cod } = product;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg p-4 relative transition-shadow hover:shadow-xl"
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full aspect-[1/1] object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">{brand}</h3>
        <p className="text-sm text-gray-600 mt-1 truncate">{title.length > 50 ? title.slice(0, 50) + '...' : title}</p>

        {/* Price */}
        <div className="flex items-center mt-4">
          <div className="text-2xl font-semibold text-green-600">${price}</div>
          {discount && (
            <div className="ml-6 font-semibold border-2 border-dashed border-red-500 text-red-500 text-sm px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Extra Info */}
        <div className="flex w-full text-nowrap items-center justify-start gap-4 text-sm text-gray-500 mt-4">
          {freeShipping && (
            <div className="flex items-center">
              <FaTruck className="text-gray-600 mr-1" />
              <span className="inline">Free shipping</span>
            </div>
          )}
          {freeGift && (
            <div className="flex items-center">
              <FaGift className="text-gray-600 mr-1" />
              <span className="inline">Free gift</span>
            </div>
          )}
          {cod && (
            <div className="flex items-center">
              <BsCashCoin className="text-gray-600 mr-1" />
              <span className="inline">COD</span>
            </div>
          )}
        </div>

        {/* Call-to-Action Button */}
        <div className="flex gap-4 self-end mt-6">
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
