import React from 'react';
import animation from './loader.svg';

export default function Loader(props) {
    return (
        <img className="Loader" alt="" src={animation} />
    );
}