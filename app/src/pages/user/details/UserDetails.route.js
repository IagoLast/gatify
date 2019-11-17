import Items from './components/Items';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import AppHeader from '../../../components/AppHeader/AppHeader';
import AuthContext from '../../../context/AuthContext';

import apiService from '../../../services/api.service';
import './UserDetails.css';

export default function UserDetails(props) {
    const [items, setItems] = useState([]);
    const [user, , signOut, isLoggedIn, , deleteAccount] = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            apiService.fetch({ uid: user.uid }).then(setItems);
        }
    }, [user]);

    if (!isLoggedIn()) {
        localStorage.setItem('cat_finder_redirect', '/user/details');
        return <Redirect to="/user/login" />;
    }

    function deleteItem(id) {
        const answer = window.confirm('¿Seguro que quieres borrar el anuncio?');
        if (!answer) {
            return;
        }

        apiService.deleteItem(id).then(() => {
            apiService.fetch({ uid: user.uid }).then(setItems);
        });
    }

    return (
        <main className="UserDetails">
            <AppHeader onBack={props.history.goBack} text="Perfil" />
            <section className="UserDetails__Info">
                <img className="UserDetails__Avatar" src={user.photoURL} alt="" />
                <span className="UserDetails__Name"> {user.displayName} </span>
            </section>

            <section>
                <h2> Acciones</h2>
                <button className="button UserDetails__SignOutButton" onClick={signOut}> Cerrar Sesion </button>
            </section>

            <section className="UserDetails__Items">
                <h2> Anuncios </h2>
                <Link className="UserDetails__NewLink" to="/new"> Publicar anuncio nuevo</Link>
                <Items items={items} onDeleteItem={deleteItem} />


            </section>

            <section>
                <h2> Cuenta</h2>
                <button className="button  UserDetails__DeleteButton" onClick={deleteAccount}> Eliminar Cuenta </button>
            </section>

        </main >
    );
}