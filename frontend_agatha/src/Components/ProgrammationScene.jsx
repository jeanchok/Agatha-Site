import React, { useState } from 'react';

const ProgrammationScene = (data) => {
    const [fridaySelelected, setFridaySelelected] = useState(true);
    const [artistesVendredi, setArtistesVendredi] = useState([]);
    const [artistesSamedi, setArtistesSamedi] = useState([]);





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

    const s1ArtistsFriday = [
        `Menthine`,
        `Helene Brahem`,
        `Specimen B2B Kyrox`,
        `Vicaps`,
        `Tete Plate`,
        `Amen Mettre Bass`,
        `Industry 43`,
        `Miza`,
        `Chech`
    ]

    const s2ArtistsFriday = [
        `Fox In Dub`,
        `Ruff A Dub`,
        `Digital Seal`,
        `M-Syla`,
        `Crucial Rob`,
        `J.Ika`
    ]

    const s3ArtistsFriday = [
        `Dourgan`,
        `Novels`,
        `Oxid & Leon`
    ]

    const s1ArtistsSaturday = [
        `Muzoterik`,
        `Touns B2B DJ Brams`,
        `Pusher`,
        `109`,
        `Gab`,
        `Wast`,
        `Luche`,
        `Dica`,
        `Omicid`,
        `C.Ysme`
    ]

    const s2ArtistsSaturday = [
        `Fox In Dub`,
        `Roll & Record`,
        `Mac Gyver (Stand High Patrol)`,
        `Guru Pope`,
        `Fabasstone`,
        `Ruff A Dub`
    ]

    const s3ArtistsSaturday = [
        `Breizh'O Folk`,
        `Kairos`,
        `Chouch'N'Molotov`,
        `Chico Electrik`,
        `Perkyzisound`
    ]



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
                    <h4>SCENE DU TEMPLE MAUDIT <br />
                        {
                            fridaySelelected ? "21H / 08H" : "18H / 08H"
                        }
                    </h4>
                    <h4 className='middleScene'>SCENE DES ANCIENNES CIVILISATIONS<br />
                        {
                            fridaySelelected ? "20H / 02H" : "19H / 04H"
                        }
                    </h4>
                    <h4>DUB'OUT & CHILL OUT<br />
                        {
                            fridaySelelected ? "20H / 06H" : "18H / 06H"
                        }
                    </h4>
                </div>
                {
                    fridaySelelected ?
                        <div className='progScenesContainer__artistes--artistes'>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                <h4 className='progScenesContainer__artistes--artistesScene--responsiveTitle'>SCENE DU TEMPLE MAUDIT<br />
                                    {
                                        fridaySelelected ? "21H / 08H" : "18H / 08H"
                                    }</h4>
                                {
                                    s1ArtistsFriday.map((artiste, index) => (
                                        <div key={index} className='progScenesContainer__artistes--artistesScene--card' >
                                            <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                <h4>{artiste}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* {artistes.map((artiste) => {
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
                                })} */}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene middleScene'>
                                <h4 className='progScenesContainer__artistes--artistesScene--responsiveTitle'>SCENE DES ANCIENNES CIVILISATIONS<br />
                                    {
                                        fridaySelelected ? "20H / 02H" : "19H / 04H"
                                    } </h4>
                                {
                                    s3ArtistsFriday.map((artiste, index) => (
                                        <div key={index} className='progScenesContainer__artistes--artistesScene--card' >
                                            <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                <h4>{artiste}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* {artistes.map((artiste) => {
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
                                })} */}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                <h4 className='progScenesContainer__artistes--artistesScene--responsiveTitle'>SCENE DUB'OUT
                                    <br />
                                    {
                                        fridaySelelected ? "20H / 06H" : "18H / 06H"
                                    }</h4>
                                {
                                    s2ArtistsFriday.map((artiste, index) => (
                                        <div key={index} className='progScenesContainer__artistes--artistesScene--card' >
                                            <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                <h4>{artiste}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* {artistes.map((artiste) => {
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
                                })} */}
                            </div>
                        </div>
                        :
                        <div className='progScenesContainer__artistes--artistes'>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                <h4 className='progScenesContainer__artistes--artistesScene--responsiveTitle'>SCENE DU TEMPLE MAUDIT
                                    <br />
                                    {
                                        fridaySelelected ? "21H / 08H" : "18H / 08H"
                                    }</h4>
                                {
                                    s1ArtistsSaturday.map((artiste, index) => (
                                        <div key={index} className='progScenesContainer__artistes--artistesScene--card' >
                                            <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                <h4>{artiste}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* {artistes.map((artiste) => {
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
                                })} */}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene middleScene'>
                                <h4 className='progScenesContainer__artistes--artistesScene--responsiveTitle'>SCENE DES ANCIENNES CIVILISATIONS<br />
                                    {
                                        fridaySelelected ? "20H / 02H" : "19H / 04H"
                                    }
                                </h4>
                                {
                                    s3ArtistsSaturday.map((artiste, index) => (
                                        <div key={index} className='progScenesContainer__artistes--artistesScene--card' >
                                            <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                <h4>{artiste}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* {artistes.map((artiste) => {
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
                                })} */}
                            </div>
                            <div className='progScenesContainer__artistes--artistesScene'>
                                <h4 className='progScenesContainer__artistes--artistesScene--responsiveTitle'>SCENE DUB'OUT   <br />
                                    {
                                        fridaySelelected ? "20H / 06H" : "18H / 06H"
                                    }
                                </h4>
                                {
                                    s2ArtistsSaturday.map((artiste, index) => (
                                        <div key={index} className='progScenesContainer__artistes--artistesScene--card' >
                                            <div className='progScenesContainer__artistes--artistesScene--cardName'>
                                                <h4>{artiste}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* {artistes.map((artiste) => {
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
                                })} */}
                            </div>
                        </div>
                }


            </div>

        </div>
    );
};

export default ProgrammationScene;