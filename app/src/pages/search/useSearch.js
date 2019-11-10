import { useState, useEffect } from 'react';
import apiService from '../../services/api.service';
import fields from '../../config/search.fields.js';
import queryStringService from '../../services/queryParams.service';


export default function useSearch(history, locationSearch) {
    const [state, setState] = useState({
        filters: {},
        items: [],
        isLoading: true,
        isDrawerVisibile: false,
        fields,
    });

    useEffect(() => {
        const rawParams = new URLSearchParams(locationSearch);
        const filters = {};
        for (const pair of rawParams) {
            filters[pair[0]] = pair[1];
        }

        setState((s) => ({ ...s, isLoading: true }));

        apiService.fetch(filters).then(items => {
            setState((s) => {
                fields.forEach(field => {
                    field.value = filters[field.id];
                });
                return ({ filters, items, isLoading: false, isDrawerVisibile: false, fields: s.fields })
            });
        });
    }, [locationSearch])

    function toggleDrawer(value) {
        setState({ ...state, isDrawerVisibile: value });
    }

    function onFiltersUpdated(e) {
        history.push(`/search${queryStringService.buildQueryString(e)}`);
        setState({ ...state, isDrawerVisibile: false });
    }

    function onItemClick(id) {
        history.push(`/details/${id}`)
    }


    return [state, toggleDrawer, onFiltersUpdated, onItemClick]
}