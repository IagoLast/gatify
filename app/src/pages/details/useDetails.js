import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiService from 'services/api.service';
import paymentsService from 'services/payments.service';

export default function useDetails() {
    const { id } = useParams();
    const history = useHistory();
    const [item, setItem] = useState(null);

    useEffect(() => {
        apiService.getByID(id).then(setItem)
    }, [id]);


    function hightLight() {
        return paymentsService.hightLight(id);
    }

    function goBack() {
        return history.goBack();
    }

    return { item, hightLight, goBack };
}
