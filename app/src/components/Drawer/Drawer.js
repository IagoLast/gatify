import React from 'react';
import './Drawer.css';

export default function Drawer(props) {
    return (
        <aside className={props.visible ? 'Drawer visible' : 'Drawer'}>
            {props.children}
        </aside>
    );
}