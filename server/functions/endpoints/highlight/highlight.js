const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const db = admin.firestore();


async function highlight(id) {
    const documentSnapshot = await db.collection('cats').doc(id).get();
    return documentSnapshot.ref.update({ highlight: new Date(Date.now()).toUTCString() });
}

module.exports = highlight;