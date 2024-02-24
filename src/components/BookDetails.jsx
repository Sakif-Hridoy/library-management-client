import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = (props) => {
  const loadedBooks = useLoaderData();
  console.log(loadedBooks)
  const[books,setBooks] = useState(loadedBooks)
  const [quantity,setQuantity] = useState(0)
  // console.log(quantity)
  console.log(books)
  const {_id} = books;
  // console.log(books.quantity)
  // const {} = loadedBooks()
  // console.log(loadedBooks)
  const { id } = useParams();
  // const idInt = parseInt(id)
  const bookdetail = loadedBooks.find((bookdetail) => bookdetail._id === id);
  console.log(bookdetail)
  // console.log(bookdetail.quantity)

  const handleBorrowSubmit =(event)=>{
    event.preventDefault();
    console.log(bookdetail.quantity)

    const form = event.target;

    const bookName = form.bookName.defaultValue;
    const borrowDate = form.borrowDate.value;
    const returnDate = form.returnDate.value;
    const category = form.category.defaultValue;
    const quantity = form.quantity.defaultValue
    const image = form.image.defaultValue;
    console.log(bookName,borrowDate,returnDate,category,image)

    const newBorrowBook = {
      bookName,
      borrowDate,
      returnDate,
      category,
      quantity,
      image
    }

    fetch('http://localhost:5000/borrowedBooks', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBorrowBook),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data,data.insertedId);
            if(data.insertedId){
              console.log(bookdetail.quantity)
              
              const quantity = parseInt(bookdetail.quantity)

              const updatedQuantity = {
                quantity
              };

              console.log('updated quantity',updatedQuantity)
              fetch(`http://localhost:5000/booksCategories/${bookdetail._id}`, {
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
            toast('Book Borrowed Successfully')
              // handleUpdateBookQuantity()

            }
            

          });

  }

  return (
    <div className="grid md:grid-cols md:col-span-12 lg:col-span-9 mt-16">
      <div
        key={id}
        className="card w-[800px] h-[500px] bg-base-100 shadow-xl mx-auto m-4"
      >
        <figure>
          <img className="mt-10 w-[30%]" src={bookdetail.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{bookdetail.name}</h2>
          <p className="text-center">Author: {bookdetail.authorName}</p>
          <p className="text-center">Book Category: {bookdetail.category}</p>
          <p className="text-center">Book Quantity: {bookdetail.quantity}</p>
          
          <div className="card-actions justify-center">
            <p className="text-center">
              <span className="font-semibold">About this book</span>:{" "}
              {bookdetail.description}
            </p>
            <br />
          </div>
          <div className="flex justify-center">
            {/* <Link>
                  <button className="btn w-[300px] bg-lime-600 text-white hover:bg-slate-400 mr-5">
                    Borrow Book
                  </button>
                </Link> */}
            <div>
              <button
                className="btn w-[300px] bg-lime-600 text-white hover:bg-slate-400 mr-5"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Borrow Book
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{bookdetail.name}</h3>
                  <form onSubmit={handleBorrowSubmit}>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Book Name</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Book Name"
                      name="bookName"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={bookdetail.name}
                      readOnly
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Borrow Date</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="date"
                      placeholder="Borrow Date"
                      name="borrowDate"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Return Date</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="date"
                      placeholder="Return Date"
                      name="returnDate"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Category</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Category"
                      name="category"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={bookdetail.category}
                    />
                  </label>

                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Quantity</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Quantity"
                      name="quantity"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={bookdetail.quantity}
                    />
                  </label>

                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Image</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Image"
                      name="image"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={bookdetail.image}
                    />
                  </label>
                  <button>Submit</button>
                  </form>
                  <div className="modal-action">
                    
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <Link>
              <button className="btn w-[300px] bg-lime-600 text-white hover:bg-slate-400">
                Read The Book
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
