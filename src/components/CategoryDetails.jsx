import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

const CategoryDetails = (props) => {
  // const loadedBooks = useLoaderData();
  const [bookCategory,setBookCategory] = useState([])
  axios.get('http://localhost:5000/booksCategories')
        .then(res=>{
          setBookCategory(res.data)
        })
  const { categoryName } = useParams();
  console.log(categoryName)
  const categoryDetails = bookCategory.filter(
    (categoryDetail) => categoryDetail.category === categoryName
  );
  console.log(categoryDetails);
  return (
    <div>
      <h2 className="mt-10 text-5xl font-semibold text-center">
        Explore {categoryName} Books
      </h2>
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-20 bg-slate-500 bg-transparent">
          {categoryDetails.map((category) => (
            <div
              key={category._id}
              className="card w-96 bg-base-100 shadow-xl mx-auto m-10"
            >
              <figure>
                <img
                  className="mt-10 w-[50%]"
                  src={category.image}
                  alt="Mobiles"
                />
              </figure>
              <div className="card-body">
                <Link to={`/categoryDetails/${category.name}`}>
                  <h2 className=" card-title justify-center align-middle cursor-pointer">
                    {category.name}
                  </h2>
                </Link>
                <p className="text-center">Author: {category.authorName}</p>
                <p className="text-center">Category: {category.category}</p>
                <p className="text-center">Rating {category.rating}</p>
                <div className="justify-center rating gap-1">
                  <input readOnly
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                  <input readOnly
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-orange-400"
                    checked
                  />
                  <input readOnly
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-yellow-400"
                  />
                  <input readOnly
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-lime-400"
                  />
                  <input readOnly
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-green-400"
                  />
                </div>
                <Link
                  className="btn bg-lime-500 hover:bg-slate-700 text-white"
                  to={`/bookDetails/${category._id}`}
                >
                  <button className="">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CategoryDetails.propTypes = {};

export default CategoryDetails;
