import React from 'react';
import animation from './loader.gif';

export default function Loader(props) {
    return (
        <img style={{ width: '100%' }} alt="" src={animation} />
    );
}