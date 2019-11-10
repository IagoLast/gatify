import React from 'react';
import Loader from '../../../components/Loader/Loader';



export default function SearchLoading() {
    return (
        <main className="Search">
            <div className="LoadingScreen">
                <Loader />
                <small style={{ display: 'block', textAlign: 'right', marginRight: '16px' }}> @yasirbugra </small>
                <h1 style={{ textAlign: 'center' }}> Cargando gatos...</h1>
            </div>
        </main>
    );
}