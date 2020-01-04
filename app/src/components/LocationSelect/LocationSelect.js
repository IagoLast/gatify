
import React from 'react';
import rawMData from './data/municipios.json';
import rawPData from './data/provincias.json';
import sort from './sort.js';

const mData = rawMData.sort(sort);
const pData = rawPData.sort(sort);

export default function LocationSelect(props) {
    switch (props.type) {
        case 'prov':
            return (
                <select id={props.id} name={props.id} required={props.required} className={props.error ? 'invalid' : null} onChange={e => props.onChange(e.target.value)} value={props.value}>
                    <option value="">{props.placeholder}</option>
                    <ProvinciasOption />
                </select>
            )
        case 'mun':
            return (
                <select id={props.id} name={props.id} required={props.required} className={props.error ? 'invalid' : null} onChange={e => props.onChange(e.target.value)} value={props.value}>
                    <option value="">{props.placeholder}</option>
                    <Municipios provincia={props.provincia} />
                </select>
            );
        default:
            return null;
    }
}

function ProvinciasOption(props) {
    return pData.map(data => <option key={data.k} value={data.k}>{data.v}</option>)
}

function Municipios(props) {
    return mData.filter(data => data.k.startsWith(props.provincia)).map(data => <option key={data.k} value={data.k}>{data.v}</option>)
}