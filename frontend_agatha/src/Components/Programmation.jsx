import React, { useContext, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import useFetch from '../Hooks/useFetch';


const Programmation = () => {
    const { navActive, setNavActive } = useContext(MyContext);
    const [className, setClassName] = useState('programmation');

    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/artistes-mis-en-avants?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>

    const DateFormater = (inputDate) => {
        let date = new Date(inputDate);
        let outputString = date.toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' });
        return outputString.toUpperCase();
    }
    let artiste = data.data;

    const defaultItem = { defaultItem: <p>Loading...</p> };

    const nbElementsToAdd = artiste.length < 4 ? 4 - artiste.length : 0;
    // for (let i = 1; i <= nbElementsToAdd; i++) {
    //     artiste.push(defaultItem);
    // }

    return (
        <section id='programmation'>
            <img className='programmation__creeper' src="/img/liane vecto 6.webp" alt="illustration liane" />

            <InView as="div" className={className} onChange={(inView, entry) => { if (inView) { setClassName('programmation' + ' fade-in') } }}>
                <div className='programmationTitle'>

                </div>
                <h2>LES ARTISTES</h2>

                <div className='programmationContainer'
                // style={data.data.length === 0 ? { background: '#ffffff4d' } : null}
                >
                    <InView as="div" onChange={(inView, entry) => { if (inView) { setNavActive('programmation') } }}>

                    </InView>
                    <div className='programmationContainer__container1'>
                        {data.data.length === 0 ?
                            <>
                                <div className='programmationContainer__incContainer programmationContainer__card item1'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                                <div className='programmationContainer__incContainer programmationContainer__card item2'>
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
                                                {/* <p>{DateFormater(artiste.attributes.DateArtisteMisEnAvant)}</p> */}
                                            </div>
                                        </div>
                                    )
                                }
                            }) :
                            null
                        }
                        {data.data.length === 1 ?
                            <>
                                <div className='programmationContainer__incContainer programmationContainer__card item2'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                            </>
                            : null}
                    </div>
                    <div className='programmationContainer__container2'>
                        {data.data.length < 3 && data.data.length > 0 ?
                            <>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                            </>
                            : null}

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
                                            {/* <p>{DateFormater(artiste.attributes.DateArtisteMisEnAvant)}</p> */}
                                        </div>
                                    </div>
                                )
                            }
                        }) : null}
                        {data.data.length === 3 ?
                            <>
                                <div className='programmationContainer__incContainer programmationContainer__card item'>
                                    <h3>PROGAMMATION A VENIR</h3>
                                </div>
                            </>
                            : null}
                    </div>
                </div>
                {data.data.length > 0 ?
                    <div className='linkContainer'>
                        <a className='linkContainer__linkButton glow-on-hover' href="/programmation">
                            <span>TOUTE LA PROGRAMMATION</span>
                            <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" className='arrowButton' />
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