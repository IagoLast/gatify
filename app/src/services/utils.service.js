export function genderToText(value) {
    if (value == 0) {
        return 'M';
    }
    return 'H';
}



export default { genderToText };