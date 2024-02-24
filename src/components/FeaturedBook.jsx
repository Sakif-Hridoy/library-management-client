import React from "react";
import PropTypes from "prop-types";
import book from "../assets/details/book eli.jpg";

const FeaturedBook = (props) => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-20">A Featured Book</h1>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={book} className="w-[400px] shadow-2xl" />
          <div>
            <h2 className="text-4xl font-bold">The Book Of Eli</h2>
            <p className="py-6">
              The Book of Eli is a 2010 American post-apocalyptic neo-Western
              action film directed by the Hughes Brothers, written by Gary
              Whitta, and starring Denzel Washington, Gary Oldman, Mila Kunis,
              Ray Stevenson, and Jennifer Beals. The story revolves around Eli,
              a nomad in a post-apocalyptic world who seeks to deliver his copy
              of a mysterious book to a safe location on the West Coast of the
              United States. Filming began in February 2009 and took place in
              New Mexico. The Book of Eli was released theatrically in the
              United States on January 15, 2010, by Warner Bros. Pictures. It
              received mixed reviews from critics, but earned $157.1 million in
              the worldwide box office on a budget of $80 million.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedBook.propTypes = {};

export default FeaturedBook;
