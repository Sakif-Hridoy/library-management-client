import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BorrowedBooks = (props) => {
  const loadedBorrow = useLoaderData();
  console.log(loadedBorrow);
  // console.log(loadedBorrow._id)
  // console.log(loadedBorrow);


  const handleReturn = (id,quantity)=>{
    console.log(id,quantity)

    const updatedBookQuantity = parseInt(quantity);
    console.log(updatedBookQuantity)
    const updatedQuantity = {
      updatedBookQuantity
    }
    fetch(`http://localhost:5000/returnBooks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if(data.modifiedCount>0){
          
          toast('Quantity Updated Successfully')
        }
        

      });
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-10 gap-4 m-20">
        {loadedBorrow.map((book) => (
          <div
            key={book._id}
            className="card w-[400px] h-[500px] bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={book.image}
                alt="Shoes"
                className="w-[150px] rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Book Name: {book.bookName}</h2>
              <p>Borrow Date: {book.borrowDate}</p>
              <p>Return Date {book.returnDate}</p>
              <p>Category: {book.category}</p>
              <p>{book.rating}</p>
              <div className="rating">
                <input
                  readOnly
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  readOnly
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <div className="card-actions">
                <button onClick={()=>handleReturn(book._id,book.quantity)} className="btn btn-primary">Return</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

BorrowedBooks.propTypes = {};

export default BorrowedBooks;
