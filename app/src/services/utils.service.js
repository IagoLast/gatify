export function genderToText(value) {
    if (value === 0) {
        return 'Macho';
    }
    return 'Hembra';
}


export default { genderToText };