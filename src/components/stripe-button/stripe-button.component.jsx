import React from 'react';
import axios from 'axios';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //Stripe wants the Cent unit. Instead of 5 dollars, it wants 500 cents 
    const priceForStripe = price * 100;
    //copy publishablekey from stripe account
    const publishableKey = 'pk_test_51I4r2mIViaGjWlb2feiJiKE1AyueyW88gDojz4zYQxYEBsJAavONLHlbpjEFmEstwAaXjlRhNGmGfRycXXmTlbLE00KtbuHjHw';

    //This will make post request to /payment to our server
    const onToken = token => {
        axios({
            url: 'https://tmetro-server.herokuapp.com/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment Successful');
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert('There was an issue with your payment. Please make sure you use the provided credit card');
            })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='T-Metro'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;