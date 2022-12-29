import React, { useContext, useState } from 'react';
import Particles from "./Particules";
import { InView } from 'react-intersection-observer';
//import { setGlobalState, useGlobalState } from '../hooks/useGlobalState';
import { MyContext } from '../Hooks/useContext';




const Landing = (props) => {

    const { navActive, setNavActive } = useContext(MyContext);

    let color = "white";
    let direction = 90;
    let shape = "image";
    let imageUrl = "/img/coud.png";
    let rotation = 0;
    let speed = 10;
    let yVariance = 0;
    let drift = 0;
    let minAlpha = 0.8;

    return (
        <section id='accueil' ref={props.ref}>
            <InView as="div" className='accueil' onChange={(inView, entry) => { if (inView) { setNavActive('accueil') } }}>
                <div className='accueil__text'>
                    <h1>AGATHA</h1>
                    <h1>FESTIVAL</h1>
                    <h3>1ère EDITION</h3>
                    <h3 className='accueil__text--date'>DU 9 AU 11 JUIN 2023</h3>
                </div>
            </InView>
            {/* <Particles minAlpha={minAlpha} drift={drift} yVariance={yVariance} rotation={rotation} speed={speed} color={color} direction={direction} shape={shape} imageUrl={imageUrl} /> */}
        </section>
    );
};

export default Landing;