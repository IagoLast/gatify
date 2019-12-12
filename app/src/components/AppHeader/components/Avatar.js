import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Avatar(props) {
    if (props.isLoading) {
        return null;
    }

    return (
        <Link to={props.isLoggedIn ? '/user/details' : '/user/login'} className="AppHeader__User">
            {props.isLoggedIn ? <img alt="" src={props.user.photoURL} /> : <FontAwesomeIcon icon={faUserCircle} />}
        </Link>
    );
}