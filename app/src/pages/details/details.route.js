
import { faBabyCarriage, faMapMarkerAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppHeader from 'components/AppHeader/AppHeader';
import Feature from 'components/Feature/Feature';
import utils from 'services/utils.service';
import './Details.css';
import useDetails from './hooks/useDetails';
import { hightLight } from 'services/payments.service';
import Figure from 'components/Figure/Figure';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import { Redirect } from "react-router-dom";


export default function DetailsRoute(props) {
    const { item } = useDetails(props.match.params.id);

    if (item === null) {
        return <LoadingScreen />;
    }

    if (item === undefined) {
        return <Redirect to="/notfound" />
    }

    return (
        <main className="Details">
            <AppHeader onBack={props.history.goBack} text={item.title} />

            <section className="Images">
                <Carousel dynamicHeight={false} showStatus={false} showThumbs={false} showArrows={true}>
                    {item.images.map(src => <Figure key={src} src={src} />)}
                </Carousel>
            </section>

            <section className="Information">
                {item.highlight ? null :
                    <div className="Information__User">
                        <h3> Destacar anuncio</h3>
                        <p> Para conseguir mejores resultados puedes destacar tu anuncio. </p>
                        <button onClick={e => hightLight(props.match.params.id)} className="button"> Click Aqui para Destacar </button>
                    </div>
                }
                <div className="Information__Header">
                    <h1 className="Info__Title">{item.title}</h1>
                    <h2 className="Info__Breed">{item.breed}</h2>
                </div>
                <div className="Features">
                    <Feature icon={faBabyCarriage} text={item.age || '?'} />
                    <Feature icon={faVenusMars} text={utils.genderToText(item.gender)} />
                    <Feature icon={faMapMarkerAlt} text={item.provincia || '?'} />
                </div>
                <div className="Info_Description">
                    <h3>Descripcion:</h3>
                    <p>{item.description} </p>
                </div>

                <div className="Info_Contact">
                    <h3> Contacto: </h3>
                    <a href={`tel:${item.phone}`}>{item.phone}</a>
                </div>
            </section>
        </main>
    );
}