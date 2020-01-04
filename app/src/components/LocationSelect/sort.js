export default function sort(a, b) {
    var textA = a.v.toUpperCase();
    var textB = b.v.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}
