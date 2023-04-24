import React, { useState } from 'react';

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
    artistes.sort((a, b) => {
        if (!a.attributes.HoraireDebut) return 1;
        if (!b.attributes.HoraireDebut) return -1;
        return a.attributes.HoraireDebut.localeCompare(b.attributes.HoraireDebut);
    });

    artistes.forEach(artiste => {
        if (artiste.attributes.HoraireDebut) {
            artiste.attributes.HoraireDebut = artiste.attributes.HoraireDebut.substring(0, 5)
        }
        if (artiste.attributes.HoraireFin) {
            artiste.attributes.HoraireFin = artiste.attributes.HoraireFin.substring(0, 5)
        }
    });



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

    // const nbElementsToAddVendredi = artistes.length < 9 ? 9 - artistes.length : (artistes.length % 3) + 3;
    // for (let i = 1; i <= nbElementsToAddVendredi; i++) {
    //     artistes.push(defaultItem);
    // }


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
                    <h4>SCENE DU TEMPLE MAUDIT</h4>
                    <h4>SCENE DES ANCIENNES CIVILISATIONS</h4>
                    <h4>SCENE DUB'OUT</h4>
                </div>
                {
                    fridaySelelected ?
                        <div className='progScenesContainer__artistes--artistes'>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                {artistes.map((artiste) => {
                                    if (artiste.attributes && artiste.attributes.DateArtiste === "2023-06-09" && artiste.attributes.SceneArtiste === "Techno") {
                                        return (
                                            <div key={artiste.id} className='progScenesContainer__artistes--artistesScene--card' >
                                                <div className='progScenesContainer__artistes--artistesScene--cardTime'>
                                                    <h5>
                                                        {artiste.attributes.HoraireDebut}
                                                    </h5>
                                                    <h5>
                                                        {artiste.attributes.HoraireFin}
                                                    </h5>
                                                </div>
                                                <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                    <h4>{artiste.attributes.NomArtiste}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                {console.log(artistes)}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                {artistes.map((artiste) => {
                                    if (artiste.attributes && artiste.attributes.DateArtiste === "2023-06-09" && artiste.attributes.SceneArtiste === "Alternative") {
                                        return (
                                            <div key={artiste.id} className='progScenesContainer__artistes--artistesScene--card' >
                                                <div className='progScenesContainer__artistes--artistesScene--cardTime'>
                                                    <h5>
                                                        {artiste.attributes.HoraireDebut}
                                                    </h5>
                                                    <h5>
                                                        {artiste.attributes.HoraireFin}
                                                    </h5>
                                                </div>
                                                <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                    <h4>{artiste.attributes.NomArtiste}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                {artistes.map((artiste) => {
                                    if (artiste.attributes && artiste.attributes.DateArtiste === "2023-06-09" && artiste.attributes.SceneArtiste === "Dub") {
                                        return (
                                            <div key={artiste.id} className='progScenesContainer__artistes--artistesScene--card' >
                                                <div className='progScenesContainer__artistes--artistesScene--cardTime'>
                                                    <h5>
                                                        {artiste.attributes.HoraireDebut}
                                                    </h5>
                                                    <h5>
                                                        {artiste.attributes.HoraireFin}
                                                    </h5>
                                                </div>
                                                <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                    <h4>{artiste.attributes.NomArtiste}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        :
                        <div className='progScenesContainer__artistes--artistes'>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                {artistes.map((artiste) => {
                                    if (artiste.attributes && (artiste.attributes.DateArtiste === "2023-06-10" || artiste.attributes.DateArtiste === "2023-06-11") && artiste.attributes.SceneArtiste === "Techno") {
                                        return (
                                            <div key={artiste.id} className='progScenesContainer__artistes--artistesScene--card'>
                                                <div className='progScenesContainer__artistes--artistesScene--cardTime'>
                                                    <h5>
                                                        {artiste.attributes.HoraireDebut}
                                                    </h5>
                                                    <h5>
                                                        {artiste.attributes.HoraireFin}
                                                    </h5>
                                                </div>
                                                <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                    <h4>{artiste.attributes.NomArtiste}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                {artistes.map((artiste) => {
                                    if (artiste.attributes && (artiste.attributes.DateArtiste === "2023-06-10" || artiste.attributes.DateArtiste === "2023-06-11") && artiste.attributes.SceneArtiste === "Alternative") {
                                        return (
                                            <div key={artiste.id} className='progScenesContainer__artistes--artistesScene--card' >
                                                <div className='progScenesContainer__artistes--artistesScene--cardTime'>
                                                    <h5>
                                                        {artiste.attributes.HoraireDebut}
                                                    </h5>
                                                    <h5>
                                                        {artiste.attributes.HoraireFin}
                                                    </h5>
                                                </div>
                                                <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                    <h4>{artiste.attributes.NomArtiste}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                {artistes.map((artiste) => {
                                    if (artiste.attributes && (artiste.attributes.DateArtiste === "2023-06-10" || artiste.attributes.DateArtiste === "2023-06-11") && artiste.attributes.SceneArtiste === "Dub") {
                                        return (
                                            <div key={artiste.id} className='progScenesContainer__artistes--artistesScene--card'>
                                                <div className='progScenesContainer__artistes--artistesScene--cardTime'>
                                                    <h5>
                                                        {artiste.attributes.HoraireDebut}
                                                    </h5>
                                                    <h5>
                                                        {artiste.attributes.HoraireFin}
                                                    </h5>
                                                </div>
                                                <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                    <h4>{artiste.attributes.NomArtiste}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                }


            </div>

        </div>
    );
};

export default ProgrammationScene;