import React from 'react';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import AppHeader from '../../components/AppHeader/AppHeader';
import { INDEX as C } from '../../config/constants';
import useIndex from './useIndex';
import './index.css';

export default function IndexRoute() {
    const { state, search, isDisabled, onProvChanged, onMunChanged, navigateToNew } = useIndex();

    return (
        <main className="Index">
            <AppHeader text={<h1>{C.TITLE}</h1>} />

            <div className="Form">
                <h2> {C.DESCRIPTION} </h2>
                <LocationSelect id="provincia" type="prov" placeholder="Provincia" onChange={onProvChanged} />
                <LocationSelect id="municipio" type="mun" placeholder="Municipio" onChange={onMunChanged} provincia={state.provincia} />
                <button data-testid="btn-search" className="button" disabled={isDisabled()} onClick={search}>Buscar</button>
            </div>

            <aside className="New">
                <button className="button" onClick={navigateToNew}>{C.NEW_BTN}</button>
            </aside>
        </main>
    );
}