import React, { lazy, Suspense } from 'react';
import Header from '../Components/Header';
import Socials from '../Components/Socials';
import Landing from '../Components/Landing';
//import Actus from '../Components/Actus';
//import Programmation from '../Components/Programmation';
//import Infos from '../Components/Infos';
//import Partenaires from '../Components/Partenaires';
import { useRef, useEffect, useState } from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Helmet } from "react-helmet";
import loadable from '@loadable/component'

const Actus = lazy(() => import('../Components/Actus'))
const Programmation = lazy(() => import('../Components/Programmation'))
const Infos = lazy(() => import('../Components/Infos'))
const Partenaires = lazy(() => import('../Components/Partenaires'))

const Accueil = () => {
    const [areCookiesAllowed, setAreCookiesAllowed] = useState(false);
    // const [width, setWidth] = useState();
    // const [height, setHeight] = useState();

    // useEffect(() => {
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    // }, [width, height]);



    return (
        <>
            {
                areCookiesAllowed ?
                    <Helmet>

                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SBKMF9MQGJ"></script>
                        <script>
                            {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-SBKMF9MQGJ');`}
                        </script>

                    </Helmet>
                    : null
            }

            <Header />
            <Socials />

            <div className={(navigator.userAgent.indexOf("Chrome") != -1) || (navigator.userAgent.indexOf('Safari') != -1) ? 'sectionContainerChrome' : 'sectionContainer'}>
                <CookieConsent
                    location="bottom"
                    buttonText="Accepter"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                    enableDeclineButton
                    declineButtonText="Refuser"
                    declineButtonId="declineButton"
                    buttonClasses="cookieButton"
                    onAccept={() => { setAreCookiesAllowed(true) }}
                    onDecline={() => { setAreCookiesAllowed(false) }}

                >

                    Pour améliorer votre expérience de navigation nous utilisons des cookies.

                </CookieConsent>
                <Landing />
                <Programmation />
                <Actus />
                <Infos />
                <Partenaires />
            </div>

        </>
    );
};

export default Accueil;