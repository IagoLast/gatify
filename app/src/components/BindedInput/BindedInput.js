import React from 'react';
import Input from '../Input/Input';

export default function BindedInput(props) {
    if (props.type === 'mun') {
        return <Input {...props} id={props.id} type={props.type} placeholder={props.placeholder} provincia={props.state.provincia} onChange={value => props.updateField(props.id, value)} value={props.state[props.id]} />
    }
    return <Input {...props} id={props.id} type={props.type} placeholder={props.placeholder} onChange={value => props.updateField(props.id, value)} value={props.state[props.id]} />
}