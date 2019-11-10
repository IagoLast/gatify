
import React from 'react';
import mData from './data/municipios.json';
import pData from './data/provincias.json';

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
    return pData.map(data => <option key={data.id} value={data.id}>{data.nm}</option>)
}

function Municipios(props) {
    return mData.filter(data => data.id.startsWith(props.provincia)).map(data => <option key={data.id} value={data.id}>{data.nm}</option>)
}