import React, { useEffect, useState, useContext } from 'react';
import env from "react-dotenv";
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
// import Carousel from 'carousel-react-rcdev'
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';




const Actus = () => {
    // const { loading, error, data } = useFetch(env.API_URL + '/api/actuses')
    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/actuses?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>

    const { navActive, setNavActive } = useContext(MyContext);

    const defaultItem = <div className="mycard item">
        <div className='mycard__text'>
            <h3>ACTUALITES A VENIR</h3>
        </div>
    </div>;

    let fakeActus = [];


    const items = [];


    if (data.data.length < 4) {
        const nbActustoAdd = data.data.length < 4 ? 4 - data.data.length : 0;
        for (let i = 1; i <= nbActustoAdd; i++) {
            items.push(defaultItem);
        }

    }

    let actus = data.data;
    actus.map((actus, index) => (
        items.push(
            <div key={actus.id} className="mycard item" data-value={index + 1}>
                <div className='mycard__text'>
                    <h3>{actus.attributes.TitreActu} </h3>
                    <Link to=''>LIRE +</Link>
                </div>
                <img src={API_URL + actus.attributes.imageActu.data.attributes.url} alt="" />
            </div>
        )
    ));

    const responsive = {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        1024: {
            items: 3,
            itemsFit: 'contain'
        },
    };

    return (
        <section id='actus'>
            <InView as="div" className='actus' onChange={(inView, entry) => { if (inView) { setNavActive('actus') } }} >
                <h2>LES ACTUS</h2>
                <div className='actusContainer'>
                    <AliceCarousel mouseTracking items={items} paddingLeft={50}
                        paddingRight={50}
                        responsive={responsive}
                        disableDotsControls />
                    {/* <Carousel>
                        {data.data.map(actus => (
                            <div key={actus.id} className="mycard">
                                <div className='mycard__text'>
                                    <h3>{actus.attributes.TitreActu} </h3>
                                    <Link to=''>LIRE +</Link>
                                </div>
                                <img src={API_URL + actus.attributes.imageActu.data.attributes.url} alt="" />
                            </div>
                        ))}
                        {
                            (fakeActus.length > 0) ? fakeActus.map(fakeActus => (
                                <div className="mycard">
                                    <div className='mycard__text'>
                                        <h3>ACTUALITES A VENIR</h3>
                                    </div>
                                </div>
                            ))
                                :
                                null
                        }
                    </Carousel> */}
                </div>
                <div className='linkContainer'>
                    <a className='linkContainer__linkButton glow-on-hover' href="https://forms.gle/jre4ZCbTBnWh7bKo9" target="_blank">
                        <span>DEVENIR BENEVOLE</span>
                        <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                    </a>
                </div>
            </InView>
        </section >
    );
};

export default Actus;