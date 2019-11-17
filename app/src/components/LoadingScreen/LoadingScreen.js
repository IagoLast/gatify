import React from 'react';
import Loader from '../Loader/Loader';
import './LoadingScreen.css';


export default function LoadingScreen() {
    return (
        <main className="LoadingScreen">
            <Loader />
            <h1 style={{ textAlign: 'center' }}> Cargando</h1>
        </main>
    );
}