import { useEffect } from 'react';
import ReactDom from 'react-dom';
import './add-to-cart-popup.styles.scss';

const AddToCartPopup = ({ addToCartPopup, showAddToCartPopup, hideAddToCartPopup }) => {

    useEffect(() => {
        if (addToCartPopup) {
            setTimeout(() => hideAddToCartPopup(), 1000)
        }
    }, [addToCartPopup])

    return ReactDom.createPortal(
        <div className={`cart-popup ${addToCartPopup ? 'cart-popup--visible' : ''}`}>
            <div className="cart-popup__container">
                <span className="cart-popup__symbol">&#10003;</span>
                <span className="cart-popup__text">Product has been added to your cart</span>
            </div>

        </div>,
        document.getElementById('cart-popup')
    )
};

export default AddToCartPopup;

