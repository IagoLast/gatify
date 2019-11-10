import { BREEDS } from './constants';

export default [
    { id: 'uid', type: 'hidden' },
    { id: 'provincia', type: 'prov', placeholder: 'Provincia' },
    { id: 'municipio', type: 'mun', placeholder: 'Municipio' },
    { id: 'breed', type: 'select', placeholder: 'Raza', options: BREEDS, sameValue: true },
    { id: 'gender', type: 'select', placeholder: 'Genero', options: ['Macho', 'Hembra'] },
]