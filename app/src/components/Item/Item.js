import { faBabyCarriage, faMapMarkerAlt, faPaw, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import Figure from 'components/Figure/Figure';
import React from 'react';
import utils from '../../services/utils.service';
import Feature from '../Feature/Feature';
import './Item.css';

export default function Item(props) {
    return (
        <li className={props.highlight ? "Item Item--highlight" : "Item"} >
            <button className="Item__Inner" onClick={() => props.onClick(props.id)}>
                <Figure width="146px" height="146px" src={props.images[0]}/>
                <div className="Item__Info">
                    <h3 className="Info__Title">{props.title}</h3>
                    <div className="Info__Extra">
                        <Feature size={64} icon={faPaw} text={props.breed} />
                        <Feature size={64} icon={faBabyCarriage} text={props.age} />
                        <Feature size={64} icon={faVenusMars} text={utils.genderToText(props.gender)} />
                        <Feature size={64} icon={faMapMarkerAlt} text={props.municipio} />
                    </div>
                </div>
            </button>
        </li>
    )
}

