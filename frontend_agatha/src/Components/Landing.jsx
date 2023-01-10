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
                <div className='accueil__clouds'></div>
                {/* <div className="sun"></div> */}
                <div className='accueil__text'>
                    <h1>AGATHA</h1>
                    <h1>FESTIVAL #1</h1>
                    <h3 className='accueil__text--date'>9/10/11 JUIN 2023</h3>
                    <h3>La quête du Quetzacoatl</h3>
                    <div className='linkContainer'>
                        <a className='linkContainer__linkButton glow-on-hover' href="https://forms.gle/jre4ZCbTBnWh7bKo9" target="_blank">
                            <span>DEVENIR BENEVOLE</span>
                            <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                        </a>
                    </div>
                </div>

            </InView>

            {/* <Particles minAlpha={minAlpha} drift={drift} yVariance={yVariance} rotation={rotation} speed={speed} color={color} direction={direction} shape={shape} imageUrl={imageUrl} /> */}
        </section>
    );
};

export default Landing;