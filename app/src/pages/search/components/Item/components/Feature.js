import React from 'react';

export default function Feature(props) {
    if (props.v === undefined) {
        return null;
    }
    return (
        <div className="Info__Feature">
            <span className="Info__FeatureKey">{props.k}: </span>
            <span>{props.v || '??'}</span>
        </div>
    )
}

