import React, { useContext, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import useFetch from '../Hooks/useFetch';


const Programmation = () => {
    const { navActive, setNavActive } = useContext(MyContext);

    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/artistes-mis-en-avants?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>

    const DateFormater = (inputDate) => {
        let date = new Date(inputDate);
        let outputString = date.toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' });
        return outputString.toUpperCase();
    }

    return (
        <section id='programmation'>
            <InView as="div" className='programmation' onChange={(inView, entry) => { if (inView) { setNavActive('programmation') } }}>
                <h2>LES ARTISTES</h2>
                <div className='programmationContainer' style={data.data.length === 0 ? { background: '#ffffff4d' } : null}>

                    <div className='programmationContainer__container1'>
                        {data.data.length === 0 ?
                            <>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                            </>
                            : null}
                        {data.data.length > 0 ?
                            data.data.map((artiste, index) => {
                                if (index < 2) {
                                    return (

                                        <div key={artiste.id} className={"programmationContainer__card item" + artiste.id} style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtisteMisEnAvant.data.attributes.url})` }}>
                                            <div className='programmationContainer__card--text'>
                                                <h3>{artiste.attributes.NomArtiste} </h3>
                                                <p>{DateFormater(artiste.attributes.DateArtisteMisEnAvant)}</p>
                                            </div>
                                        </div>

                                    )
                                }

                            }) :
                            null
                        }
                    </div>
                    <div className='programmationContainer__container2'>
                        {data.data.length === 0 ?
                            <>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                            </>
                            : null}
                        {data.data.length > 0 ? data.data.map((artiste, index) => {
                            if (index > 1) {
                                return (

                                    <div key={artiste.id} className={"programmationContainer__card item" + artiste.id} style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtisteMisEnAvant.data.attributes.url})` }}>
                                        <div className='programmationContainer__card--text'>
                                            <h3>{artiste.attributes.NomArtiste} </h3>
                                            <p>{DateFormater(artiste.attributes.DateArtisteMisEnAvant)}</p>
                                        </div>
                                    </div>

                                )
                            }
                        }) : null}
                    </div>
                </div>
                {data.data.length > 0 ?
                    <div className='linkContainer'>
                        <a className='linkContainer__linkButton glow-on-hover' href="/programmation">
                            <span>TOUTE LA PROGRAMMATION</span>
                            <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                        </a>
                    </div>
                    :
                    null

                }

            </InView>
        </section>
    );
};

export default Programmation;