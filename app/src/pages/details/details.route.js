
import { faBabyCarriage, faMapMarkerAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import apiService from '../../services/api.service';
import './Details.css';
import Feature from '../../components/Feature/Feature';
import AppHeader from '../../components/AppHeader/AppHeader';
import utils from '../../services/utils.service';


export default function DetailsRoute(props) {
    const [item, setItem] = useState({ images: [] });

    useEffect(() => {
        apiService.getByID(props.match.params.id).then(setItem)
    }, [props.match.params.id]);

    function hightLight() {
        const stripe = window.Stripe('pk_test_PylC5N4TcZrfGqe3MQB61q3j00qob13vcP');

        stripe.redirectToCheckout({
            items: [{ sku: 'sku_Fs6GmG3meVb77y', quantity: 1 }],
            clientReferenceId: props.match.params.id,
            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: 'http://localhost:3000/buy?status=ok',
            cancelUrl: 'http://localhost:3000/buy?status=no',
        })
    }

    return (
        <main className="Details">
            <AppHeader onBack={props.history.goBack} text={item.title} />

            <Carousel showStatus={false} showThumbs={false} showArrows={true}>
                {item.images.map(src => <span key={src} className="Details__Image" style={{ backgroundImage: `url(${src})` }}></span>)}
            </Carousel>

            <section className="Information">
                <div className="Information__User">
                    <h3> Destacar anuncio</h3>
                    <p> Para conseguir mejores resultados puedes destacar tu anuncio. </p>
                    <button onClick={hightLight} className="button"> Click Aqui para Destacar </button>
                </div>
                <div className="Information__Header">
                    <h1 className="Info__Title">{item.title}</h1>
                    <h2 className="Info__Breed">{item.breed}</h2>
                </div>
                <div className="Features">
                    <Feature icon={faBabyCarriage} text={item.age} />
                    <Feature icon={faVenusMars} text={utils.genderToText(item.gender)} />
                    <Feature icon={faMapMarkerAlt} text={item.municipio} />
                </div>
                <div className="Info_Description">
                    <h3> Descripcion: </h3>
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