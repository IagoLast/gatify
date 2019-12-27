import fieldsBase from 'config/new.fields.js';
import AuthContext from 'context/auth/auth.context';
import { useContext, useEffect, useState } from 'react';
import apiService from 'services/api.service';
import fieldsService from './fields.service';

export default function useDetails(id) {
    const { isLoggedIn } = useContext(AuthContext);
    const [fields, setFields] = useState(fieldsBase);
    const [isLoading, setLoading] = useState(false);
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (!isLoggedIn()) {
            return;
        }
        setLoading(true);
        apiService.getByID(id).then(item => {
            setItem(item)
            setFields(fieldsService.addDefaultValues(fields, item));
            setLoading(false);
        });
    }, [id, fields, isLoggedIn]);


    function editItem(v, history) {
        setLoading(true);
        v.id = id;
        apiService.editItem(v)
            .then(() => {
                history.push(`/details/${id}`);
            })
            .catch(err => {
                alert('Error:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return { isLoggedIn, item, isLoading, setLoading, fields, editItem };
}
