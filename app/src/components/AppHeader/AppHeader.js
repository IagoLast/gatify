import AuthContext from 'context/auth/auth.context';
import React from 'react';
import './AppHeader.css';
import Avatar from './components/Avatar';
import LeftButton from './components/LeftButton';

export default function AppHeader(props) {
    const { user, isLoggedIn, isLoading } = React.useContext(AuthContext);

    return (
        <header className="AppHeader">
            <LeftButton onBack={props.onBack} />
            {typeof props.text == 'string' ? <p> {props.text} </p> : props.text}
            <Avatar isLoading={isLoading()} isLoggedIn={isLoggedIn()} user={user} />
        </header>
    );
}