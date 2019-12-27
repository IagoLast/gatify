import React from 'react';
import LocationSelect from 'components/LocationSelect/LocationSelect';

export default function Input(props) {
    switch (props.type) {
        case 'image':
            return <ImageInput {...props} />
        case 'prov':
            return <LocationSelect type="prov" {...props} />
        case 'mun':
            return <LocationSelect type="mun" {...props} />
        case 'text':
            return <TextInput {...props} />
        case 'textarea':
            return <TextAreaInput {...props} />
        case 'phone':
            return <PhoneInput {...props} />;
        case 'number':
            return <NumberInput {...props} />;
        case 'select':
            return <SelectInput {...props} />;
        case 'hidden':
            return null; // Used in filters
        default:
            throw Error(`No input of type: ${props.type} found`);
    }
}

function ImageInput(props) {
    return (
        <React.Fragment>
            <label role="button" onKeyPress={e => e.which === 32 && e.target.click()} tabIndex="0" className={props.error ? 'button invalid' : 'button '} htmlFor={props.id}> Añadir Fotos </label>
            <input tabIndex="-1" required={props.required} id={props.id} name={props.id} type="file" multiple onChange={e => props.onChange(Array.from(e.target.files))} ></input>
            <Gallery error={props.error} onDelete={image => props.onChange(props.value.filter(e => e !== image))} files={props.value} />
        </React.Fragment>
    );
}

function Gallery(props) {
    if (props.error) {
        return (
            <div className="gallery">
                <p className="error">Es necesario subir alguna foto.</p>
            </div>
        );
    }

    return (
        <div className="gallery">
            {props.files.map(file => {
                // file is a String
                if (typeof file === 'string') {
                    return (
                        <figure key={file} >
                            <img alt="" src={file} />
                            <figcaption>
                                <button className="button" onClick={() => props.onDelete(file)} > Quitar foto </button>
                            </figcaption>
                        </figure>
                    );
                }
                // File is a File
                return (
                    <figure key={window.URL.createObjectURL(file)} >
                        <img alt={file.name} src={window.URL.createObjectURL(file)} />
                        <figcaption>
                            <button className="button" onClick={() => props.onDelete(file)} > Quitar foto </button>
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
}

function SelectInput(props) {
    return (
        <select
            id={props.id}
            key={props.id}
            name={props.id}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            className={props.error ? 'invalid' : null}
            required={props.required}
        >
            <option value="" >{props.placeholder}</option>
            {props.options.map((option, i) => <option key={i} value={props.sameValue ? option : i}>{option}</option>)}
        </select>
    );
}

function TextInput(props) {
    return <input
        id={props.id}
        key={props.id}
        name={props.id}
        onChange={e => props.onChange(e.target.value)}
        value={props.value} className={props.error ? 'invalid' : null}
        type="text"
        placeholder={props.placeholder}
        required={props.required}
        maxLength={props.maxlength}
    >
    </input>
}

function TextAreaInput(props) {
    return <textarea
        id={props.id}
        key={props.id}
        name={props.id}
        onChange={e => props.onChange(e.target.value)}
        value={props.value}
        className={props.error ? 'invalid' : null}
        placeholder={props.placeholder}
        rows={props.rows}
        required={props.required}
    ></textarea>
}

function PhoneInput(props) {
    return <input id={props.id}
        key={props.id}
        name={props.id} type="tel" value={props.value}
        onChange={e => props.onChange(e.target.value)}
        className={props.error ? 'invalid' : null}
        placeholder={props.placeholder}
        required={props.required}
    ></input>;
}

function NumberInput(props) {
    return <input id={props.id}
        key={props.id}
        name={props.id} value={props.value}
        onChange={e => props.onChange(e.target.value)}
        className={props.error ? 'invalid' : null}
        placeholder={props.placeholder}
        type="number"
        min={props.min}
        max={props.max}
        required={props.required}
    />;
}


