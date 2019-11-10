import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import Form from '../../components/Form/Form';
import fields from '../../config/new.fields.js';
import AuthContext from '../../context/AuthContext';
import apiService from '../../services/api.service';
import AppHeader from '../../components/AppHeader/AppHeader';

import './New.css';


export default function New(props) {
    const [user, , , isLoggedIn] = useContext(AuthContext);


    if (!isLoggedIn()) {
        localStorage.setItem('cat_finder_redirect', '/new');
        return <Redirect to="/user/login" />;
    }

    function onSubmit(v) {
        apiService.newItem({ ...v, uid: user.uid })
            .then(() => {
                props.history.push('/search')
            })
            .catch(() => {
                alert('No se ha podido publicar tu anuncio.');
            });
    }

    return (
        <main className="Main">
            <AppHeader onBack={props.history.goBack} text="Nuevo Anuncio" />
            <div id="error-message"></div>
            <Form onSubmit={onSubmit} fields={fields} buttonText="Publicar Anuncio" />
        </main>
    );
}