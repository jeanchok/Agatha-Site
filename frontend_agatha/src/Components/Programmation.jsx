import React, { useContext, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import useFetch from '../Hooks/useFetch';


const Programmation = () => {
    const { navActive, setNavActive } = useContext(MyContext);

    const API_URL = 'http://localhost:1337';
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
                <div className='programmationContainer'>
                    <div className='programmationContainer__container1'>
                        {data.data.map((artiste, index) => {
                            if (index < 2) {
                                return (

                                    <div key={artiste.id} className={"programmationContainer__card item" + artiste.id} style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtisteMisEnAvant.data.attributes.url})` }}>
                                        <div className='programmationContainer__card--text'>
                                            <h3>{artiste.attributes.NomArtiste} </h3>
                                            <p>{DateFormater(artiste.attributes.DateArtisteMisEnAvant)}</p>
                                        </div>
                                        {/* <img src={API_URL + artiste.attributes.ImageArtisteMisEnAvant.data.attributes.url} alt="" /> */}
                                    </div>

                                )
                            }

                        })}
                    </div>
                    <div className='programmationContainer__container2'>
                        {data.data.map((artiste, index) => {
                            if (index > 1) {
                                return (

                                    <div key={artiste.id} className={"programmationContainer__card item" + artiste.id} style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtisteMisEnAvant.data.attributes.url})` }}>
                                        <div className='programmationContainer__card--text'>
                                            <h3>{artiste.attributes.NomArtiste} </h3>
                                            <p>{DateFormater(artiste.attributes.DateArtisteMisEnAvant)}</p>
                                        </div>
                                        {/* <img src={API_URL + artiste.attributes.ImageArtisteMisEnAvant.data.attributes.url} alt="" /> */}
                                    </div>

                                )
                            }
                        })}
                    </div>
                </div>
                <div className='linkContainer'>
                    <a className='linkContainer__linkButton glow-on-hover' href="/programmation">
                        <span>TOUTE LA PROGRAMMATION</span>
                        <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                    </a>
                </div>
            </InView>
        </section>
    );
};

export default Programmation;