import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaGift, FaCartPlus } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { image, brand, title, price, discount, freeShipping, freeGift, retailer } = product;

  return (
    <motion.div
      className="max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg p-4 relative transition-shadow hover:shadow-xl"
      whileHover={{ scale: 1 }}
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
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
        <div className="flex items-center justify-start gap-4 text-sm text-gray-500 mt-4">
          {freeShipping && (
            <div className="flex items-center">
              <FaTruck className="text-gray-600 mr-1" />
              <span className="hidden md:inline">Free shipping</span>
            </div>
          )}
          {freeGift && (
            <div className="flex items-center">
              <FaGift className="text-gray-600 mr-1" />
              <span className="hidden md:inline">Free gift</span>
            </div>
          )}
        </div>

        {/* Call-to-Action Button */}
        <div className="flex gap-4 self-end mt-6">
          <button
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 text-lg font-semibold hover:bg-green-700 transition"
            onClick={product.onViewDeal}
          >
            Buy Now
          </button>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 text-lg font-semibold hover:bg-green-700 transition"
            onClick={product.onViewDeal}
          >
            <FaCartPlus size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
