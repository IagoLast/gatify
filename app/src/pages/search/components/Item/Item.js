import { faBabyCarriage, faMapMarkerAlt, faPaw, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import Figure from 'components/Figure/Figure';
import React, { useEffect, useState } from 'react';
import utils from 'services/utils.service';
import Feature from 'components/Feature/Feature';
import './Item.css';

export default function Item(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 460);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile((window.innerWidth < 460));
        });
    });

    const size = isMobile ? 44 : 58;
    const padding = isMobile ? '16px 12px' : '18px';

    return (
        <li className="Item" >
            <button className={props.highlight ? "Item__Inner Item__Inner--highlight" : "Item__Inner"} onClick={() => props.onClick(props.id)}>
                <Figure width="146px" height="146px" src={props.images && props.images[0]} />
                <div style={{ padding }} className="Item__Info">
                    <h3 className="Info__Title">{props.title}</h3>
                    <div className="Info__Extra">
                        <Feature size={size} icon={faPaw} text={props.breed || '?'} />
                        <Feature size={size} icon={faBabyCarriage} text={props.age || '?'} />
                        <Feature size={size} icon={faVenusMars} text={utils.genderToText(props.gender)} />
                        <Feature size={size} icon={faMapMarkerAlt} text={props.provincia || '?'} />
                    </div>
                </div>
            </button>
        </li>
    )
}

