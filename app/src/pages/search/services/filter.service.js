export function getURLParameters(locationSearch) {
    const rawParams = new URLSearchParams(locationSearch);
    const filters = {};
    // eslint-disable-next-line no-unused-vars
    for (const pair of rawParams) {
        filters[pair[0]] = pair[1];
    }
    return filters;
}


export default { getURLParameters };