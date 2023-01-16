import React from 'react';
import Header from '../Components/Header';
import Socials from '../Components/Socials';
import Landing from '../Components/Landing';
import Actus from '../Components/Actus';
import Programmation from '../Components/Programmation';
import Infos from '../Components/Infos';
import Partenaires from '../Components/Partenaires';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';



const Accueil = () => {



    return (
        <>
            <Header />
            <Socials />

            <div className={(navigator.userAgent.indexOf("Chrome") != -1) ? 'sectionContainerChrome' : 'sectionContainer'}>
                <Landing />
                <Programmation />
                <Actus />
                <Infos />
                <Partenaires />
                <div className='dontGoLandscape'>Restes en mode portrait, sinon j'ai la tête toute penchée.</div>
            </div>

        </>
    );
};

export default Accueil;