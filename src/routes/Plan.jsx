
import React from 'react';
// import "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
// import { Link } from 'react-router-dom';

import '../Plan.css';



let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe("pk_test_51LqSlKIS9qTMHhjmq1oJfAvKAhvUaoQm7cdbSeJowx4dNstX5Xci7e1nQpytQhwvTsgkilhggkzOUi6GeqjFlVlq00YNpkvuDh");
    }
    return stripePromise;
}

console.log("process.env.REACT_APP_STRIPE_KEY: ", "pk_test_51LqSlKIS9qTMHhjmq1oJfAvKAhvUaoQm7cdbSeJowx4dNstX5Xci7e1nQpytQhwvTsgkilhggkzOUi6GeqjFlVlq00YNpkvuDh")

function Plan() {

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const item = {
        price: "price_1LqTEhIS9qTMHhjmXXwB6jPV",
        quantity: 1,
    }

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}`,
        cancelUrl: `${window.location.origin}`
//         successUrl: `${window.location.origin}/plan/success`,
//         cancelUrl: `${window.location.origin}/plan/cancel`
      };
    
    const redirectToCheckout = async () => {
        setLoading(true);
        console.log("Redirect To Checkout");
    
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);
    
        if (error) setStripeError(error.message);
        setLoading(false);
    };
    if(stripeError) alert(stripeError);



    return (
        <div className='planDiv'>
            <h2>Subscription Plan</h2>

            <div className='row'>

                <div className='planCard'>
                    <h3>Basic Plan</h3>
                    <h4>Free</h4>
                    <p>View unlimited questions and articles</p>
                    <p>Post any question and article</p>
                    <p>Edit and delete any question and article</p>
                    <p>Receive daily newsletter</p>
                    <button type="submit" className='subscribeButton'>
                        <p>Subscribed</p>
                    </button>
            </div>

            <div className='planCard'>
                    <h3>Premium Plan</h3>
                    <h4>$9.99AUD</h4>
                    <p>Everything from Basic Plan</p>
                    <p>Customization features like messages and banners, themes, and content controls</p>
                    <p>Additional admin suport features like analytics dashboard</p>
                    <p>Private chat with premium members and content creator</p>

                    <button type="submit" className='subscribeButton'
                    onClick={redirectToCheckout}
                    disabled={isLoading} >
                        <p>{isLoading ? "Loading ..": "Subscribe" }</p>
                    {/* Subscribe */}
                    </button>
            </div>

           </div>



        </div>
    )

}

export default Plan;
