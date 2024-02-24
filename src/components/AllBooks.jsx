import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProviders';
const AllBooks = props => {
  const [books, setbooks] = useState([]);
  const {setLoading} = useContext(AuthContext)

   useEffect(()=>{
    axios.get('http://localhost:5000/books', { withCredentials: true })
    .then(res => {
       setbooks(res.data);
    })
    .catch(error => {
       console.error("Error fetching books:", error);
    });
   },[])
        
  // console.log(loadedbooks);

    return (
        <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 mt-10 gap-4 m-20'>
        {
          books.map(book=><div key={book._id} className="card w-[400px] h-[500px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={book.image} alt="Shoes" className="w-[150px] rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{book.name}</h2>
            <p>{book.authorName}</p>
            <p>{book.category}</p>
            <p>{book.rating}</p>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

            <div className="card-actions">
              <Link to={`/updateBook/${book._id}`}><button className="btn btn-primary">Update</button></Link>
            </div>
          </div>
        </div>)
        }
        </div>
      </div>
    );
};

AllBooks.propTypes = {
    
};

export default AllBooks;