const functions = require('firebase-functions');
const app = require('./app.js');

exports.stripe = functions.https.onRequest(app);