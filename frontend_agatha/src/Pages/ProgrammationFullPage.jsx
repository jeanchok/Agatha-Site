import React, { useEffect, useState } from 'react';
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';
import ProgrammationArtiste from '../Components/ProgrammationArtiste';
import ProgrammationScene from '../Components/ProgrammationScene';
import useFetch from '../Hooks/useFetch';

const ProgrammationFullPage = () => {
    const [isArtisteSelected, setIsArtisteSelected] = useState(true);
    const API_URL = 'http://localhost:1337';
    const { loading, error, data } = useFetch(API_URL + '/api/programmations?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>

    // const artistes = data.data;

    // const artistesDimanche = [];
    // const artistesSamedi = [];
    // const artistesVendredi = [];


    // Array.from(artistes).map((artiste) => {
    //     if (artiste.attributes.DateArtiste === "2023-06-11") {
    //         artistesDimanche.push(artiste);
    //     }
    // });

    // artistes.map((artiste) => {
    //     if (artiste.attributes.DateArtiste === "2023-06-10") {
    //         artistesSamedi.push(artiste);
    //     }
    // });

    // Array.from(artistes).map((artiste) => {
    //     if (artiste.attributes.DateArtiste === "2023-06-09") {
    //         artistesVendredi.push(artiste);
    //     }
    // });


    return (

        <div className='ProgrammationFullPage'>
            <Header2 idHref="/" />
            <div className='ProgrammationFullPage__title'>
                <h2>PROGRAMMATION</h2>
                <h3>3 JOURS | 3 SCENES | 36 ARTISTES | 66 HEURES DE LIVE</h3>
            </div>

            <div className='ProgrammationFullPage__buttonContainer'>
                <button className={isArtisteSelected ? 'ProgrammationFullPage__buttonContainer--artisteButton artisteActive' : 'ProgrammationFullPage__buttonContainer--artisteButton'} onClick={() => setIsArtisteSelected(true)}>
                    <span>ARTISTES</span>
                </button>
                <button className={!isArtisteSelected ? 'ProgrammationFullPage__buttonContainer--sceneButton sceneActive' : 'ProgrammationFullPage__buttonContainer--sceneButton'} onClick={() => setIsArtisteSelected(false)}>
                    <span>SCENES</span>
                </button>
            </div>

            {
                isArtisteSelected ? <ProgrammationArtiste /> : <ProgrammationScene data={data} />
            }
            <Footer />
        </div>


    );
};

export default ProgrammationFullPage;