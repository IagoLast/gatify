import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Feature.css';

export default function Feature(props) {
    return (
        <div className="Feature">
            <span className="Feature__Key"> <FontAwesomeIcon icon={props.icon} /></span>
            <span className="Feature__Value">{props.text}</span>
        </div>
    )
}