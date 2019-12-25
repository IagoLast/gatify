export function genderToText(value) {
    switch (value) {
        case 0:
        case '0':
            return 'Macho'
        case 1:
        case '1':
            return 'Hembra';
        default:
            return '?';
    }
}


export default { genderToText };