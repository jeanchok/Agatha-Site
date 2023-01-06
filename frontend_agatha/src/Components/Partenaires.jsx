import React, { useContext, useState } from 'react';
import Particles from "./Particules";
import Footer from '../Components/Footer';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import useFetch from '../Hooks/useFetch';

const Partenaires = (props) => {
    const { navActive, setNavActive } = useContext(MyContext);
    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/nos-partenairess?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>


    let color = "white";
    let direction = 90;
    let shape = "circle";
    let imageUrl = "";
    let rotation = 0;
    let speed = 10;
    let yVariance = 0;
    let drift = 0;
    let minAlpha = 0.8;
    return (
        <section id='partenaires'>
            <InView as="div" className='partenaires' onChange={(inView, entry) => { if (inView) { setNavActive('partenaires') } }}>
                <div className='partenairesText'>
                    <h2>NOS PARTENAIRES</h2>
                    <h3>ILS NOUS ACCOMPAGNENT</h3>
                </div>
                <div className='partenairesContainer'>
                    {data ? data.data.map(partenaires => (
                        <div key={partenaires.id} className={"partenairesContainer__card item" + partenaires.id}>

                            <img src={API_URL + partenaires.attributes.LogoPartenaire.data.attributes.url} alt="" />
                            <div className='partenairesContainer__card--text'>
                                <h4>{partenaires.attributes.NomPartenaire} </h4>
                            </div>
                        </div>
                    )) : null}
                    <img className='partenairesContainer__maya' src="/img/maya1.png" alt="maya illustration" />
                    {/* <Particles minAlpha={minAlpha} drift={drift} yVariance={yVariance} rotation={rotation} speed={speed} color={color} direction={direction} shape={shape} imageUrl={imageUrl} /> */}

                </div>
            </InView>
            <Footer />

        </section>
    );
};

export default Partenaires;