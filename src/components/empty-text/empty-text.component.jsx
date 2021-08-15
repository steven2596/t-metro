import React from 'react';

import './empty-text.styles.scss';

import { ReactComponent as EmptyCart } from '../../assets/icons/empty-checkout.svg';

const EmptyText = () => {
    return (
        <div className='empty-checkout' >
            <div className="empty__text-box" >
                <h3 className="empty__heading">Your cart is empty</h3>
                <p className="empty__text" >Looks like you haven't added any items to your cart yet</p>
            </div>
            <EmptyCart className="empty__svg" />


        </div>
    );
}

export default EmptyText;