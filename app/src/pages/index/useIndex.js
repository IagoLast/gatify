
import React from 'react';
import * as Router from 'react-router-dom'
import queryParamsService from 'services/queryParams.service';

export default function useIndex() {
    const [state, setState] = React.useState({ provincia: null, municipio: null });
    const history = Router.useHistory();


    function search() {
        history.push(`/search${queryParamsService.buildQueryString(state)}`);
    }

    function navigateToNew() {
        history.push(`/new`);
    }

    function isDisabled() {
        return !state.provincia;
    }

    function onProvChanged(value) {
        return setState({ ...state, provincia: value })
    }

    function onMunChanged(value) {
        return setState({ ...state, municipio: value })
    }

    return { state, search, isDisabled, onProvChanged, onMunChanged, navigateToNew };
}