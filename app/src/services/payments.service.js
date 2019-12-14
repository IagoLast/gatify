export function hightLight(id) {
    const stripe = window.Stripe('pk_test_PylC5N4TcZrfGqe3MQB61q3j00qob13vcP');

    return stripe.redirectToCheckout({
        items: [{ sku: 'sku_Fs6GmG3meVb77y', quantity: 1 }],
        clientReferenceId: id,
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'http://localhost:3000/buy?status=ok',
        cancelUrl: 'http://localhost:3000/buy?status=no',
    });
}

export default { hightLight };