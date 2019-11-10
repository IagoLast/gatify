import { faBabyCarriage, faMapMarkerAlt, faPaw, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Feature from '../Feature/Feature';
import './Item.css';
import utils from '../../services/utils.service';

export default function Item(props) {
    console.warn(props);
    return (
        <li>
            <button className={props.highlight ? "Item Item--highlight" : "Item"} onClick={() => props.onClick(props.id)}>
                <div className="Item__ImageWrapper" style={{ backgroundImage: `url(${props.images[0]})` }}></div>
                <div className="Item__Info">
                    <p className="Info__Title">{props.title}</p>
                    <div className="Info__Extra">
                        <Feature icon={faPaw} text={props.breed} />
                        <Feature icon={faBabyCarriage} text={props.age} />
                        <Feature icon={faVenusMars} text={utils.genderToText(props.gender)} />
                        <Feature icon={faMapMarkerAlt} text={props.municipio} />
                    </div>
                </div>
            </button>
        </li>
    )
}

