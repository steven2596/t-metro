import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import './image-slider.styles.scss';

import { sliderImages } from './image-slider.data';

SwiperCore.use([Navigation]);

const ImageSlider = () => {
    return (
        <div className="image-slider">
            <h2 className="image-slider__heading">@twicetagram</h2>
            <p className="image-slider__text">Daily dose of happiness, unfiltered</p>
            <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation
                spaceBetween={50}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    750: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }

                }}
            >
                {
                    sliderImages.map((image, index) => (
                        <SwiperSlide key={index} tag="li" style={{ listStyle: 'none' }}>
                            <img
                                className='image'
                                src={image}
                                alt={`img-${index}`}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}

export default ImageSlider;