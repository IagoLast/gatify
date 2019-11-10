import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Drawer from '../../components/Drawer/Drawer';
import Form from '../../components/Form/Form';
import Item from '../../components/Item/Item';
import SearchLoading from './components/SearchLoading';
import AppHeader from '../../components/AppHeader/AppHeader';
import useSearch from './useSearch';


import './Search.css';

export default function SearchRoute(props) {
    const [state, toggleDrawer, onFiltersUpdated, onItemClick] = SearchRoute.$ = useSearch(props.history, props.location.search);

    if (state.isLoading) {
        return <SearchLoading />;
    }

    return (
        <main className="Search">
            <AppHeader onBack={() => props.history.push('/')} text={state.items.length + (state.items.length === 1 ? ' resultado' : ' resultados')} />

            <div className="Search__Menu">
                <button className="button Search__Button" onClick={() => toggleDrawer(true)}><FontAwesomeIcon icon={faFilter} /> Filtrar </button>
            </div>

            <Drawer visible={state.isDrawerVisibile}>
                <h2> Filtros </h2>
                <Form buttonText="Ver resultados filtrados" fields={state.fields} onSubmit={onFiltersUpdated} />
            </Drawer>

            <ul className="Search__Items">
                {state.items.map((item, i) => <Item onClick={onItemClick} key={item.id} {...item} />)}
            </ul>
        </main>
    );
}