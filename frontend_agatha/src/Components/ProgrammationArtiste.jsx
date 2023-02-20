import React, { useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import Artiste from '../Components/Artiste';

const ProgrammationArtiste = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/programmations?populate=*')
    if (loading) return <p></p>
    if (error) return <p>Errror :</p>

    // const gridStyle = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3, 1fr)',
    //     // gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
    //     gap: '16px',
    //     width: '80%',

    // };

    const defaultItem = { defaultItem: "defaultItem" };


    const artistes = data.data;


    const artistesSamedi = [];
    const artistesVendredi = [];


    artistes.map((artiste) => {
        if (artiste.attributes.DateArtiste === "2023-06-10" || artiste.attributes.DateArtiste === "2023-06-11") {
            artistesSamedi.push(artiste);
        }
    });

    artistes.map((artiste) => {
        if (artiste.attributes.DateArtiste === "2023-06-09") {
            artistesVendredi.push(artiste);
        }
    });


    const nbElementsToAddVendredi = artistesVendredi.length < 9 ? 9 - artistesVendredi.length : (artistesVendredi.length % 3) + 3;
    for (let i = 1; i <= nbElementsToAddVendredi; i++) {
        artistesVendredi.push(defaultItem);
    }

    const nbElementsToAddSamedi = artistesSamedi.length < 9 ? 9 - artistesSamedi.length : (artistesSamedi.length % 3) + 3;
    for (let i = 1; i <= nbElementsToAddSamedi; i++) {
        artistesSamedi.push(defaultItem);
    }


    return (
        <div className='ProgrammationFullPage__progArtistesContainer slide-in-fwd-center' >
            {/* div className='ProgrammationFullPage__progArtistesContainer slide-in-fwd-center' */}
            <div className='ProgrammationFullPage__date '>
                <h4>VENDREDI 9 JUIN</h4>
            </div>

            <div className="grid"
            // style={gridStyle}
            >
                {artistesVendredi.map((artiste, index) => {
                    if (artiste.attributes) {
                        return (
                            // <div key={index} style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtiste.data.attributes.url})`, aspectRatio: '4/3', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                            //     <div className='grid__textCard'>
                            //         <h4>{artiste.attributes.NomArtiste}</h4>
                            //         <div className='grid__textCard--link'>
                            //             <Link className='grid__textCard--link1' to=''>EN SAVOIR +</Link>
                            //             <a className='grid__textCard--link2' href={artiste.attributes.LienSpotify}><img src='/img/icons8-spotify-100.png' alt='spotify logo'></img></a>
                            //         </div>
                            //     </div>
                            // </div>
                            <Artiste key={index} artiste={artiste} />
                        )
                    }
                    else {
                        return (
                            <div className='grid__incomingArtiste' key={index} style={{ aspectRatio: '3/2' }} >
                                <h4>A VENIR</h4>
                            </div>
                        )
                    }
                })}

            </div>
            <div className='ProgrammationFullPage__date'>
                <h4>SAMEDI 10 JUIN</h4>
            </div>

            <div className="grid"
            // style={gridStyle}
            >
                {artistesSamedi.map((artiste, index) => {
                    if (artiste.attributes) {
                        return (
                            <Artiste key={index} artiste={artiste} />
                        )
                    }
                    else {
                        return (
                            <div className='grid__incomingArtiste' key={index} style={{ aspectRatio: '3/2' }}>
                                <h4>A VENIR</h4>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default ProgrammationArtiste;