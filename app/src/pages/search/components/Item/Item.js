import Figure from 'components/Figure/Figure';
import React, { useEffect, useState } from 'react';
import Feature from './components/Feature';
import utils from 'services/utils.service';
import timeService from 'services/time.service';
import './Item.css';

export default function Item(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 460);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile((window.innerWidth < 460));
        });
    });

    const padding = isMobile ? '16px 12px' : '18px';
    return (
        <li className="Item" >
            <button className={props.highlight ? "Item__Inner Item__Inner--highlight" : "Item__Inner"} onClick={() => props.onClick(props.id)}>
                <Figure width="146px" height="146px" src={props.images && props.images[0]} />
                <div style={{ padding }} className="Item__Info">
                    <div>
                        <h3 className="Info__Title">{props.title}</h3>
                        <span className="Info__SubTitle">{timeService.format(props.created.seconds * 1000)}</span>
                    </div>
                    <div className="Info__Extra">
                        <Feature k="Género" v={utils.genderToText(props.gender)} />
                        <Feature k="Edad" v={props.age} />
                        <Feature k="Raza" v={props.breed} />
                    </div>
                </div>
            </button>
        </li>
    )
}

