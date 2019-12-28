import { faGoogle } from '@fortawesome//free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from 'context/auth/auth.context';
import React, { useContext } from 'react';
import { Link, Redirect } from "react-router-dom";
import * as C from '../../../config/constants';
import catImg from './cat.jpeg';
import './Login.css';


export default function UserLogin(props) {
    const { signIn, isLoggedIn, isLoading } = useContext(AuthContext);

    if (isLoading()) {
        return null;
    }

    if (isLoggedIn()) {
        return <Redirect to={localStorage.getItem('cat_finder_redirect')} />;
    }

    return (
        <main data-testid="page-login" className="Login">
            <h1 className="Login__Title"> {C.USER.LOGIN.TITLE} </h1>
            <p className="Login__Subtitle">
                {C.USER.LOGIN.SUBTITLE}
            </p>

            <img width="300" height="300" className="Login__Image" src={catImg} alt="" />

            <button className="Login__Button button--primary" onClick={signIn}> <FontAwesomeIcon icon={faGoogle} />  Entrar con Google </button>

            <Link className="Login__IndexLink" to="/"> Volver al inicio</Link>
        </main >
    );
}