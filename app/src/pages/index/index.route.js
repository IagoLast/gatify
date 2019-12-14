import React, { useState } from 'react';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import AppHeader from '../../components/AppHeader/AppHeader';
import { INDEX as C } from '../../config/constants';
import queryStringService from '../../services/queryParams.service';
import './index.css';

export default function IndexRoute(props) {
    const [state, setState] = useState({ provincia: null, municipio: null });


    function search(params) {
        props.history.push(`/search${queryStringService.buildQueryString(params)}`);
    }

    function isDisabled() {
        return !state.provincia;
    }

    return (
        <main className="Index">
            <AppHeader text={<h1>{C.TITLE}</h1>} />

            <div className="Form">
                <h2> {C.DESCRIPTION} </h2>
                <LocationSelect id="provincia" type="prov" placeholder="Provincia" onChange={provincia => setState({ ...state, provincia })} />
                <LocationSelect id="municipio" type="mun" placeholder="Municipio" onChange={municipio => setState({ ...state, municipio })} provincia={state.provincia} />
                <button className="button" disabled={isDisabled()} onClick={() => search(state)}>Buscar</button>
            </div>

            <aside className="New">
                <button className="button" onClick={() => props.history.push(`/new`)}>{C.NEW_BTN}</button>
            </aside>
        </main>
    );
}