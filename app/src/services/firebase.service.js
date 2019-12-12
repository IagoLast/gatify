import * as firebase from "firebase/app";

export async function getByID(id) {
    const documentSnapshot = await firebase.firestore().collection('cats').doc(id).get();

    if (!documentSnapshot.exists) {
        return;
    }
    const item = documentSnapshot.data();
    item.id = documentSnapshot.id;
    return item;
}

export async function get(filters) {
    let collection = await firebase.firestore().collection('cats');

    if (filters) {
        filters.forEach(filter => { collection = collection.where(...filter) });
    }

    const querySnapShot = await collection.get();
    return _addIDToQuerySnapShot(querySnapShot);
}

function _addIDToQuerySnapShot(querySnapShot) {
    return querySnapShot.docs.map(doc => {
        const item = doc.data();
        item.id = doc.id;
        return item;
    });
}

export async function create(item) {
    const promises = [];

    item.images.forEach(image => {
        const ref = firebase.storage().ref(item.phone + image.name)
        promises.push(ref.put(image));
    });

    await Promise.all(promises);
    const images = await Promise.all(promises.map(promise => promise.snapshot.ref.getDownloadURL()));
    item.images = images;
    return firebase.firestore().collection('cats').add(item);
}

export async function deleteItem(id) {
    return firebase.firestore().collection('cats').doc(id).delete();
}

export default { get, create, getByID, deleteItem };
