import React from 'react';

import Item from '../item/item.component';

import './product-carousel.styles.scss';
import productSliderData from './product-carousel.data';

const ProductCarousel = () => {
    return (
        <>
            <h2 className="product-carousal__title">Best Sellers</h2>
            <div className="product-carousel" >
                {
                    productSliderData.map(product => <Item key={product.id} item={product} />)
                }
            </div>
        </>
    );
}

export default ProductCarousel;