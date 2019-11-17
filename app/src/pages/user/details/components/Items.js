import { faTrashAlt, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Items(props) {
    if (!props.items.length) {
        return <p> No tienes anuncios creados. </p>;
    }
    return (
        <ul>
            {
                props.items.map((item) => {
                    return (
                        <li className="UserDetails__Item" key={item.id}>

                            <Link to={`/details/${item.id}`} className="UserDetails__Item">{item.title} </Link>


                            <div className="UserDetails__ItemActions">
                                {/* <button title="Destacar" className="UserDetails__ItemButton" onClick={() => props.onDeleteItem(item.id)}>
                                    <FontAwesomeIcon color="#171720" icon={faHighlighter} />
                                </button> */}

                                <button title="Borrar" className="UserDetails__ItemButton" onClick={() => props.onDeleteItem(item.id)}>
                                    <FontAwesomeIcon color="#171720" icon={faTrashAlt} />
                                </button>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}