import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import image1 from "../assets/slide 1.jpg"
import image2 from "../assets/slide 2.jpg"
import image3 from "../assets/slide 3.png"
import image4 from "../assets/slide 4.jpg"
import image5 from "../assets/slide 5.jpg"
import image6 from "../assets/slide 6.jpg"
import image7 from "../assets/slide 7.jpg"


const FeaturedProduct = (props) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [dataLength,setDatalength] = useState(1);

  useEffect(()=>{
    fetch("http://localhost:5000/booksCategories")
    .then((res) => res.json())
    .then((data) => setFeaturedProducts(data));
  },[])

  return (
    <div>
      <h2 className="mt-24 text-4xl text-center font-semibold mb-14">
        Featured Products
      </h2>
      {
        featuredProducts.slice(0,dataLength).map(product =><div key={product._id} className="carousel rounded-box">
        <div className="carousel-item mr-4 text-center">
          <img className="w-[250px] h-[400px]" src={image1} alt="Burger" />
          
        </div> 
        <div className="carousel-item mr-4">
          <img className="w-[250px] h-[400px]" src={image2} alt="Burger" />
        </div> 
        <div className="carousel-item mr-4">
          <img className="w-[250px] h-[400px]" src={image3} alt="Burger" />
        </div> 
        <div className="carousel-item mr-4">
          <img className="w-[250px] h-[400px]" src={image4} alt="Burger" />
        </div> 
        <div className="carousel-item mr-4">
          <img className="w-[250px] h-[400px]" src={image5} alt="Burger" />
        </div> 
        <div className="carousel-item mr-4">
          <img className="w-[250px] h-[400px]" src={image6} alt="Burger" />
        </div> 
        <div className="carousel-item mr-4">
          <img className="w-[250px] h-[400px]" src={image7} alt="Burger" />
        </div>
      </div>)
      }
    </div>
  );
};

FeaturedProduct.propTypes = {};

export default FeaturedProduct;
