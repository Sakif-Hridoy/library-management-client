import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from "../assets/slider/1.jpg"
import slider2 from "../assets/slider/2.jpg"
import slider3 from "../assets/slider/3.jpg"
import slider4 from "../assets/slider/4.jpg"


const Banner = props => {
    return (
        <Swiper className="h-[500px]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><h2 className="text-5xl slider-header">Discover New Worlds</h2><p className="slider-p"> Explore our vast collection of books, opening doors <br/> to uncharted realms and captivating stories. Immerse yourself in a literary journey that knows no bounds.</p><img src={slider1}style={{width:'100%'}}></img></SwiperSlide>
        <SwiperSlide><h2 className="text-5xl slider-header">Knowledge Unleashed</h2><p className="slider-p">Uncover the power of learning with our extensive library. From classics to cutting-edge literature, unlock the doors to a wealth of knowledge that fuels your intellectual curiosity.</p><img src={slider2}style={{width:'100%'}}></img></SwiperSlide>
        <SwiperSlide><h2 className="text-5xl slider-header">Escape into Fiction</h2><p className="text-slate-500 slider-p">Dive into the enchanting world of fiction, where imagination knows no limits. Let the pages transport you to new realities and provide a welcome escape from the ordinary.</p><img src={slider3}style={{width:'100%'}}></img></SwiperSlide>
        <SwiperSlide><h2 className="text-5xl slider-header">Journey Through Time</h2><p className="slider-p"> Embark on a historical voyage through the ages with our curated collection. From ancient civilizations to modern revolutions, our library is a gateway to the past that enriches the present</p><img src={slider4}style={{width:'100%'}}></img></SwiperSlide>
      </Swiper>
    );
};

Banner.propTypes = {
    
};

export default Banner;