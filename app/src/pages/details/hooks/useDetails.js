import { useState, useEffect } from 'react';
import apiService from 'services/api.service';

export default function useDetails(id) {
    const [item, setItem] = useState();

    useEffect(() => {
        apiService.getByID(id).then(setItem)
    }, [id]);

    return { item };
}
