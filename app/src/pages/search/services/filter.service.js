export function getURLParameters(locationSearch) {
    const rawParams = new URLSearchParams(locationSearch);
    const filters = {};
    for (const pair of rawParams) {
        filters[pair[0]] = pair[1];
    }
    return filters;
}


export default { getURLParameters };