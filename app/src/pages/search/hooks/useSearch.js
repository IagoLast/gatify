import { useState, useEffect } from 'react';
import apiService from 'services/api.service';
import fields from 'config/search.fields.js';
import queryStringService from 'services/queryParams.service';
import filterService from '../services/filter.service';

export default function useSearch(history, locationSearch) {
    const [state, setState] = useState({
        filters: {},
        items: [],
        isLoading: true,
        isDrawerVisibile: false,
        fields,
    });

    useEffect(() => {
        const filters = filterService.getURLParameters(locationSearch);
        const fields = _getFields(filters);
        setState((s) => ({ ...s, isLoading: true }));
        apiService.fetch(filters).then(items => {
            setState({ filters, items, isLoading: false, isDrawerVisibile: false, fields });
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

    function _getFields(filters) {
        fields.forEach(field => {
            field.value = filters[field.id];
        });
        return fields;
    }

    return { state, toggleDrawer, onFiltersUpdated, onItemClick };
}