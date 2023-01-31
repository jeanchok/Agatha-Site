import React, { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';

const ProgrammationScene = (data) => {
    const [fridaySelelected, setFridaySelelected] = useState(true);
    const [artistesVendredi, setArtistesVendredi] = useState([]);
    const [artistesSamedi, setArtistesSamedi] = useState([]);


    const API_URL = import.meta.env.VITE_API_URL;
    // const { loading, error, data } = useFetch(API_URL + '/api/programmations?populate=*')
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Errror :</p>


    const defaultItem = { defaultItem: "defaultItem" };
    const artistes = data.data.data;



    // artistes.forEach(artiste => {
    //     if (artiste.attributes.DateArtiste === "2023-06-10") {
    //         setArtistesSamedi(oldArray => [...oldArray, artiste]);
    //     }
    // });

    // artistes.forEach(artiste => {
    //     if (artiste.attributes.DateArtiste === "2023-06-09") {
    //         setArtistesVendredi(oldArray => [...oldArray, artiste]);
    //     }
    // });




    // const nbElementsToAddVendredi = artistesVendredi.length < 9 ? 9 - artistesVendredi.length : (artistesVendredi.length % 3) + 3;
    // for (let i = 1; i <= nbElementsToAddVendredi; i++) {
    //     artistesVendredi.push(defaultItem);
    // }

    // const nbElementsToAddSamedi = artistesSamedi.length < 9 ? 9 - artistesSamedi.length : (artistesSamedi.length % 3) + 3;
    // for (let i = 1; i <= nbElementsToAddSamedi; i++) {
    //     artistesSamedi.push(defaultItem);
    // }

    // const nbElementsToAddDimanche = artistesDimanche.length < 9 ? 9 - artistesDimanche.length : (artistesDimanche.length % 3) + 3;
    // for (let i = 1; i <= nbElementsToAddDimanche; i++) {
    //     artistesDimanche.push(defaultItem);
    // }



    return (
        <div className='progScenesContainer slide-in-fwd-center'>
            <div className='progScenesContainer__days'>
                <button className={fridaySelelected ? 'daySelected' : ''} onClick={() => setFridaySelelected(true)}>
                    <span>VENDREDI 9 JUIN</span>
                </button>
                <button className={!fridaySelelected ? 'daySelected' : ''} onClick={() => setFridaySelelected(false)}>
                    <span>SAMEDI 10 JUIN</span>
                </button>
            </div>
            <div className='progScenesContainer__artistes'>
                <div className='progScenesContainer__artistes--scenes'>
                    <h4>SCENE TECHNO</h4>
                    <h4>SCENE ALTERNATIVE</h4>
                    <h4>SCENE DUB</h4>
                </div>
                <div className='progScenesContainer__artistes--artistes'>
                    <div>
                        {artistes.map((artiste) => {
                            if (artiste.attributes && artiste.attributes.DateArtiste === "2023-06-09") {
                                return (
                                    <div key={artiste.id} style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtiste.data.attributes.url})`, aspectRatio: '4/3', backgroundRepeat: 'no-repeat' }}>
                                        <div className=''>
                                            <h4>{artiste.attributes.NomArtiste}</h4>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        {console.log(artistes)}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProgrammationScene;