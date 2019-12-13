import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Feature.css';

export default function Feature(props) {
    return (
        <div className="Feature" style={{ width: props.size, height: props.size, marginLeft: props.size / 8 }}>
            <span className="Feature__Key"> <FontAwesomeIcon icon={props.icon} /></span>
            <span style={{ fontSize: props.size ? '12px' : 'initial' }} className="Feature__Value">{props.text}</span>
        </div>
    )
}