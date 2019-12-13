
import React from 'react';
import './Buy.css';


export default function DetailsRoute(props) {
    function buy() {
        const stripe = window.Stripe('pk_test_PylC5N4TcZrfGqe3MQB61q3j00qob13vcP');

        stripe.redirectToCheckout({
            items: [{ sku: 'sku_Fs6GmG3meVb77y', quantity: 1 }],

            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: 'http://localhost:3000/buy?status=ok',
            cancelUrl: 'http://localhost:3000/buy?status=no',
        })
    }

    const parameters = new URLSearchParams(props.location.search);

    return (
        <main className="Buy">
            <button role="link" onClick={buy}> BUY </button>
            {parameters.get('status')}
        </main>
    );
}