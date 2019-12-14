export function hightLight(id) {
    const stripe = window.Stripe('pk_test_PylC5N4TcZrfGqe3MQB61q3j00qob13vcP');

    return stripe.redirectToCheckout({
        items: [{ sku: 'sku_Fs6GmG3meVb77y', quantity: 1 }],
        clientReferenceId: id,
        successUrl: `http://localhost:3000/payments?status=success&id=${id}`,
        cancelUrl: `http://localhost:3000/payments?status=error&id=${id}`,
    });
}

export default { hightLight };