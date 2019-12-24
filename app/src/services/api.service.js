import firebaseService from './documents.service';
import searchFields from '../config/search.fields';

export async function fetch(query) {
    if (!query) {
        return firebaseService.get();
    }

    const filters = _generateFilters(query)

    return firebaseService.get(filters);
}

function _generateFilters(query) {
    const filters = [];
    searchFields.forEach(({ id }) => {
        if (query[id]) {
            filters.push([id, '==', query[id]]);
        }
    });
    return filters;
}

export async function getByID(id) {
    return firebaseService.getByID(id);
}

export async function createItem(item) {
    return firebaseService.create(item);
}

export async function deleteItem(id) {
    return firebaseService.deleteItem(id);
}

export default { fetch, newItem: createItem, getByID, deleteItem };