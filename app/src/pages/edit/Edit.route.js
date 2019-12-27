import React from 'react';
import { Redirect } from "react-router-dom";
import AppHeader from '../../components/AppHeader/AppHeader';
import Form from '../../components/Form/Form';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import './Edit.css';
import useEdit from './useEdit';

export default function Edit(props) {
    const { isLoggedIn, item, isLoading, editItem, fields } = useEdit(props.match.params.id);

    if (!isLoggedIn()) {
        localStorage.setItem('cat_finder_redirect', props.location.pathname);
        return <Redirect to="/user/login" />;
    }

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (item === undefined) {
        return <Redirect to="/notfound" />
    }

    return (
        <main data-testid="page-edit" className="Edit">
            <AppHeader onBack={props.history.goBack} text="Editar" />
            <Form onSubmit={v => editItem(v, props.history)} fields={fields} buttonText="Editar Anuncio" />
        </main>
    );
}