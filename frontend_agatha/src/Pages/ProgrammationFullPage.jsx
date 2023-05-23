import React, { useEffect, useState } from 'react';
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';
import ProgrammationArtiste from '../Components/ProgrammationArtiste';
import ProgrammationScene from '../Components/ProgrammationScene';
import useFetch from '../Hooks/useFetch';

const ProgrammationFullPage = () => {
    const [isArtisteSelected, setIsArtisteSelected] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;
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
            <img className='ProgrammationFullPage__creeper' src="/img/liane vecto 5.webp" alt="illustration liane" />
            <div className='ProgrammationFullPage__title'>
                <h2>PROGRAMMATION</h2>
            </div>

            <div className='ProgrammationFullPage__buttonContainer'>
                <button className={isArtisteSelected ? 'ProgrammationFullPage__buttonContainer--artisteButton artisteActive' : 'ProgrammationFullPage__buttonContainer--artisteButton'} onClick={() => setIsArtisteSelected(true)}>
                    <span>ARTISTES</span>
                </button>
                <button className={!isArtisteSelected ? 'ProgrammationFullPage__buttonContainer--sceneButton sceneActive' : 'ProgrammationFullPage__buttonContainer--sceneButton'} onClick={() => setIsArtisteSelected(false)}>
                    <span>SCENES</span>
                </button>
            </div>

            {/* {
                isArtisteSelected ? <ProgrammationArtiste isArtisteSelected={isArtisteSelected} /> : <ProgrammationScene data={data} isArtisteSelected={isArtisteSelected} />
            } */}


            <div style={{ display: isArtisteSelected ? 'flex' : 'none' }} className='ProgrammationArtiste'>
                <ProgrammationArtiste isArtisteSelected={isArtisteSelected} />
            </div>
            <div style={{ display: isArtisteSelected ? 'none' : 'flex' }} className='ProgrammationScene'>
                <ProgrammationScene data={data} isArtisteSelected={isArtisteSelected} />
            </div>

            <Footer />
        </div>


    );
};

export default ProgrammationFullPage;