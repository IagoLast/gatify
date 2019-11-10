import { faUserCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './AppHeader.css';

export default function AppHeader(props) {
    const [user, , , isLoggedIn, isLoading,] = useAuth();

    return (
        <header className="AppHeader">
            <LeftButton onBack={props.onBack} />
            <p>{props.text} </p>
            <Avatar isLoading={isLoading()} isLoggedIn={isLoggedIn()} user={user} />
        </header>
    );
}


function LeftButton(props) {
    if (props.onBack) {
        return (
            <button className="AppHeader__LeftButton" onClick={props.onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    }
    return null;
}

function Avatar(props) {
    if (props.isLoading) {
        return null;
    }

    return (
        <Link to={props.isLoggedIn ? '/user/details' : '/user/login'} className="AppHeader__User">
            {props.isLoggedIn ? <img alt="" src={props.user.photoURL} /> : <FontAwesomeIcon icon={faUserCircle} />}
        </Link>
    );
}