import { BREEDS } from './constants';

export default [
    { id: 'provincia', type: 'prov', placeholder: 'Provincia', required: true },
    { id: 'municipio', type: 'mun', placeholder: 'Municipio', required: true },
    { id: 'breed', type: 'select', placeholder: 'Raza', options: BREEDS, sameValue: true, required: true },
    { id: 'gender', type: 'select', placeholder: 'Genero', options: ['Macho', 'Hembra'], required: true },
    { id: 'age', type: 'number', placeholder: 'Edad', required: true, min: 0, max: 50 },
    { id: 'phone', type: 'phone', placeholder: 'Teléfono', required: true },
    { id: 'title', type: 'text', placeholder: 'Titulo del anuncio', required: true, maxlength: "140" },
    { id: 'description', type: 'textarea', placeholder: 'Descripcion', required: true },
    { id: 'images', type: 'image', required: true, },
]