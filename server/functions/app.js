const express = require('express');
const stripe = require('stripe')('sk_test_K8lkZPNcEhw1cA9A62L774Cc00aMK5TO1B');
const highlight = require('./endpoints/highlight/highlight.js');
const bodyParser = require('body-parser')
const ENDPOINT_SECRET = 'whsec_KoWtxyy5Z32gNFOnYd2aeYE4F9pxqkgr';


const app = express();

app.use(bodyParser.raw({ type: '*/*' }));

app.post('*', async (request, response) => {
    let event;
    try {
        event = stripe.webhooks.constructEvent(request.rawBody, request.headers['stripe-signature'], ENDPOINT_SECRET);
    } catch (err) {
        return response.status(401);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Fulfill the purchase...
        try {
            await highlight(session.client_reference_id);
            return response.status(200).send('ok');
        }
        catch (err) {
            return response.status(500).send(`Webhook Error: ${err.message}`);
        }
    }

    return response.status(404).send('not ok');
});

module.exports = app;