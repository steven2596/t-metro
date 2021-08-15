import React from 'react';
import BenefitSection from '../../components/benefit/benefit.component';
import Directory from '../../components/directory/directory.component';
import Feature from '../../components/feature/feature.component';
import Header from '../../components/header/header.component';
import ImageSlider from '../../components/image-slider/image-slider.component';
import ProductCarousel from '../../components/product-carousel/product-carousel.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage" >
            <Header />
            <ProductCarousel />
            <Feature />
            <Directory />
            <BenefitSection />
            <ImageSlider />
        </div>
    );
}

export default HomePage;