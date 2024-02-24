import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import BookCategory from './BookCategory';
import FeaturedBook from './FeaturedBook';
import FeaturedProduct from './FeaturedProduct';

const Home = props => {
    return (
        <div>
            {/* <h2>Home</h2> */}
        <Banner></Banner>
        <BookCategory></BookCategory>
        <FeaturedBook></FeaturedBook>
        <FeaturedProduct></FeaturedProduct>

        </div>
    );
};

Home.propTypes = {
    
};

export default Home;