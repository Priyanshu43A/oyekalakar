import React from 'react';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Homepage = () => {
  const productData = [
    {
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg",
      brand: "Apple",
      title: "Apple iPad Pro 11-inch Wi-Fi 256GB",
      price: "799.99",
      discount: 10,
      freeShipping: true,
      freeGift: true,
      cod: true,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Apple iPad Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://m.media-amazon.com/images/I/71sgxIlf2EL._AC_SL1500_.jpg",
      brand: "Sony",
      title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: "399.99",
      discount: 5,
      freeShipping: true,
      freeGift: true,
      retailer: {
        name: "Best Buy",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Sony WH-1000XM5!"),
    },
    {
      image: "https://m.media-amazon.com/images/I/61DJtAdQAkL._AC_SL1000_.jpg",
      brand: "Logitech",
      title: "Logitech MX Master 3 Advanced Wireless Mouse",
      price: "99.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Walmart",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Logitech MX Master 3!"),
    },
    {
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg",
      brand: "Amazon",
      title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
      price: "49.99",
      discount: 20,
      freeShipping: false,
      freeGift: true,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Echo Dot!"),
    },
    {
      image: "https://m.media-amazon.com/images/I/71lJjGoDkIL._AC_SL1500_.jpg",
      brand: "Samsung",
      title: "Samsung Galaxy Watch 6 44mm Smartwatch",
      price: "279.99",
      discount: null,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Newegg",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Watch 6!"),
    },
  ];
  
  
  const productData2 = [
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Samsung",
      title: "Samsung Galaxy Book Pro i7 16GB/512GB",
      price: "1149.99",
      discount: 15,
      freeShipping: true,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Samsung Galaxy Book Pro!"),
    },
    {
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9ad?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Dell",
      title: "Dell XPS 13 11th Gen Intel i5 8GB/256GB",
      price: "999.00",
      discount: 10,
      freeShipping: true,
      freeGift: true,
      retailer: {
        name: "Best Buy",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Dell XPS 13!"),
    },
    {
      image: "https://images.unsplash.com/photo-1566478986587-c7a9014fd8f9?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Lenovo",
      title: "Lenovo ThinkPad X1 Carbon 14-inch Ultrabook",
      price: "1299.99",
      discount: 18,
      freeShipping: false,
      freeGift: false,
      retailer: {
        name: "Newegg",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Lenovo ThinkPad!"),
    },
    {
      image: "https://images.unsplash.com/photo-1585079545162-4a109708ce60?ixlib=rb-4.0.3&q=80&w=400",
      brand: "HP",
      title: "HP Spectre x360 13.5 2-in-1 Laptop",
      price: "1449.99",
      discount: null,
      freeShipping: true,
      freeGift: true,
      retailer: {
        name: "Walmart",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for HP Spectre x360!"),
    },
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&q=80&w=400",
      brand: "Asus",
      title: "Asus ROG Zephyrus G14 Gaming Laptop",
      price: "1599.99",
      discount: 25,
      freeShipping: false,
      freeGift: false,
      retailer: {
        name: "Amazon",
        logo: "https://via.placeholder.com/24",
      },
      onViewDeal: () => alert("Viewing deal for Asus ROG Zephyrus!"),
    },
  ];
  

  return (
    <div className='w-full min-h-screen bg-bgprimary'>
        <Navbar />
        <Slides />
        <Products heading={"featured products"} link={''} productData={productData} />
        <Products heading={"Week's top products"} link={''} productData={productData2} />
        <Products heading={"Best products in paintings"} link={''} productData={productData} />

        <Footer />
    </div>
  )
}

export default Homepage;