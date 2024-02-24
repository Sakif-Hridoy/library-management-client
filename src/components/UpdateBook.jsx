import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateBook = props => {
    const updateBook = useLoaderData()
    const {_id,name,
        quantity,
        authorName,
        category,
        description,
        rating,
        image} = updateBook
    console.log(updateBook)
    const [updatedBook,setUpdatedBook] = useState([]);

    const handleUpdateBook = e =>{
        e.preventDefault();
        
            const form = e.target;
        
        const name = form.name.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
    
        const newBook = {
          name,
          quantity,
          authorName,
          category,
          description,
          rating,
          image
        };
        
            console.log(newBook);
    
            fetch(`http://localhost:5000/book/${_id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newBook),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                toast('Product Updated Successfully')
    
              });
    
    
      }
    

    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Book</h2>
      <form onSubmit={handleUpdateBook}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Book Name"
                className="input input-bordered w-full"
                defaultValue={name}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
                defaultValue={quantity}
              />
            </label>
          </div>
          {/*  */}
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="authorName"
                placeholder="Author Name"
                className="input input-bordered w-full"
                defaultValue={authorName}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
                defaultValue={category}
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
                defaultValue={description}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Rating (10)"
                name="rating"
                className="input input-bordered w-full"
                defaultValue={rating}
              />
            </label>
          </div>
        </div>

        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="image"
                name="image"
                className="input input-bordered w-full"
                defaultValue={image}
              />
            </label>
          </div>
        </div>

        <input
          className="btn btn-block bg-slate-600 text-white"
          type="submit"
          name="Update Book"
          value="Update Book"
          
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
    );
};

UpdateBook.propTypes = {
    
};

export default UpdateBook;