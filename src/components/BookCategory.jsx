import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookCategory = props => {

    const [bookCategory,setBookCategory] = useState([])

    useEffect(()=>{
        fetch('bookCategory.json')
        .then(res=>res.json())
        .then(data=>{setBookCategory(data)})
    },[])

    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-semibold text-center'>Welcome To The Library</h2>
            <p className='mt-10 text-center text-2xl'>Welcome To The Most Popular Library Today</p>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-10 gap-4 m-20'>
                {
                    bookCategory.map(book=><div key={book.categoryName} className="card w-[450px] h-[150px] card-side bg-base-100 shadow:lg shadow-xl ml-20">
                    <figure><img className='w-[70px] h-[100px] mt-5 ml-5' src={book.image} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="card-title justify-end">{book.categoryName}</h2>
                      <div className="card-actions justify-end">
                        <Link to={`/categoryDetails/${book.categoryName}`}><button className="btn btn-primary">See All</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>

        </div>
    );
};

BookCategory.propTypes = {
    
};

export default BookCategory;