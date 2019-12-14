import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";
import AppHeader from '../../components/AppHeader/AppHeader';
import Form from '../../components/Form/Form';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import fields from '../../config/new.fields.js';
import AuthContext from '../../context/AuthContext';
import apiService from '../../services/api.service';
import './New.css';


export default function New(props) {
    const [isLoading, setLoading] = useState(false);
    const [user, , , isLoggedIn] = useContext(AuthContext);

    if (!isLoggedIn()) {
        localStorage.setItem('cat_finder_redirect', '/new');
        return <Redirect to="/user/login" />;
    }

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <main className="Main">
            <AppHeader onBack={props.history.goBack} text="Nuevo Anuncio" />
            <div id="error-message"></div>
            <Form onSubmit={_onSubmit} fields={fields} buttonText="Publicar Anuncio" />
        </main>
    );


    function _onSubmit(v) {
        setLoading(true);
        apiService.newItem({ ...v, uid: user.uid })
            .then(item => {
                props.history.push(`/details/${item.id}`);
            })
            .catch(() => {
                alert('No se ha podido publicar tu anuncio.');
            });
    }
}