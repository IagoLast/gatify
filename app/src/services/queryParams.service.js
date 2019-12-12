export function buildQueryString(object) {
    let queryString = '?'
    for (var key in object) {
        if (object[key] !== undefined && object[key] !== null && object[key] !== '') {
            queryString += `${key}=${object[key]}&`;
        }
    }

    return queryString === '?' ? '' : queryString.slice(0, -1);
}


export default { buildQueryString };