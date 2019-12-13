import React from 'react';
import './Figure.css';

export default function Figure(props) {
    return (
        <figure className="Figure" style={{ minWidth: props.width, maxWidth: props.width, minHeight: props.height, maxHeight: props.height }} >
            <img className="Figure__Image" src={props.src} alt={props.alt} />
        </figure>
    );
}