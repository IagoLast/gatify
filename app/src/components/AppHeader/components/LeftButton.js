import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function LeftButton(props) {
    if (props.onBack) {
        return (
            <button className="AppHeader__LeftButton" onClick={props.onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    }
    return null;
}