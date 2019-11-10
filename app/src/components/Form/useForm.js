import { useState } from 'react';

export default function useForm(fields) {
    const [state, setState] = useState(_generateInitialState(fields));

    function updateField(key, value) {
        state[key] = value;
        setState({ ...state });
    }

    return [state, updateField];
}


function _generateInitialState(fields) {
    const state = {};
    fields.forEach(field => {
        state[field.id] = field.value || _getInitialValue(field);
    });
    return state;
}


function _getInitialValue(field) {
    switch (field.type) {
        case 'image':
            return [];
        case 'prov':
        case 'mun':
            return undefined;
        case 'text':
        case 'textarea':
        case 'phone':
        case 'number':
        case 'select':
        default:
            return '';
    }
}