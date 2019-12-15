import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Feature.css';

export default function Feature(props) {
    const fontSizeKey = props.size ? `${props.size / 4}px` : 'initial';
    const fontSizeValue = props.size ? `${props.size / 6}px` : 'initial';
    const marginLeft = props.size ? `${props.size / 8}px` : 'initial';

    return (
        <div className="Feature" style={{ flex: `0 0 ${props.size}px`, fontSize: fontSizeKey, width: props.size, height: props.size, marginLeft }}>
            <span className="Feature__Key"> <FontAwesomeIcon icon={props.icon} /></span>
            <span style={{ fontSize: fontSizeValue }} className="Feature__Value">{props.text}</span>
        </div>
    )
}