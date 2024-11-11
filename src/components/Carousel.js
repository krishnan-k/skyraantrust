import React from 'react';
import '../components-css/carousel.css';
import Wave from '../images/donate_bannerBG.png';
import { Swiper, SwiperSlide } from "swiper/react";
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import { Fade, Slide } from 'react-awesome-reveal';
const Carousel = () => {
    return (
        <div className='carousel-section'>
            <div className='container'>
                <div className='carousel-inner-section'>
                    <Fade cascade direction='up'
                    >
                        <h2>
                            Skyraan Trust
                        </h2>
                    </Fade>
                    <Fade cascade  direction='up'
                    >
                        <h4>We Need, Your Help</h4>
                    </Fade>
                    <Fade direction='up'>
                        <p>A Skyraan Trust:Offering Selflessdeeds to a world in need</p>
                    </Fade>
                    <div className='join-our-team'>
                        <Fade cascade direction='up'>
                            <button className='btn text-capitalize carousel-btn' type="button">join our team</button>
                        </Fade>
                    </div>
                </div>
                <Swiper navigation={true} grabCursor={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Navigation,Autoplay]} className="mySwiper carouse-section">
                    <SwiperSlide><img src={food1} alt='food 1' className='food-img' /></SwiperSlide>
                    <SwiperSlide><img src={food2} alt='food 1' className='food-img' /></SwiperSlide>
                    <SwiperSlide><img src={food3} alt='food 1' className='food-img' /></SwiperSlide>
                </Swiper>
            </div>
            <div className='wave-image'>
                <img className='wave-image' src={Wave} alt='wave' />
            </div>
        </div>
    );
}

export default Carousel;
