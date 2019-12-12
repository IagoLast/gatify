import React from 'react';
import useAuth from '../../hooks/useAuth';
import './AppHeader.css';
import Avatar from './components/Avatar';
import LeftButton from './components/LeftButton';


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