import React from 'react';
import './Payment.css';

export default function SearchRoute(props) {
    const params = new URLSearchParams(props.location.search);
    const status = params.get('status');
    const id = params.get('id');

    return (
        <main className="Payment">
            {
                params.get('status') === 'success' ? <h1> Pago realizado con éxito </h1> : <h1> El pago ha fallado</h1>
            }
            <a href={`/details/${id}`}> Ver mi anuncio</a>
        </main >
    );
}