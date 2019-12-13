export default function sort(a, b) {
    var textA = a.nm.toUpperCase();
    var textB = b.nm.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}
