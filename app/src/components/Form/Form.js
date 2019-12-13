import React, { useRef } from 'react';
import BindedInput from '../BindedInput/BindedInput';
import useForm from './useForm'

export default function Form(props) {
    const formRef = useRef(null);
    const [state, updateField] = useForm(props.fields);

    function _onSubmit(e) {
        e.preventDefault();
        formRef.current.checkValidity();
        props.onSubmit(state);
    }
    
    return (
        <form ref={formRef} onSubmit={_onSubmit} className="Form">
            {props.fields.map(field => <BindedInput key={field.id} state={state} updateField={updateField} {...field} />)}
            <section className="action-btn">
                <input type="submit" value={props.buttonText} className="button"></input>
            </section>
        </form>
    );
} 