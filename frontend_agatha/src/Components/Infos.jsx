import React, { useContext, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';

const Infos = () => {
    const { navActive, setNavActive } = useContext(MyContext);
    return (
        <section id='infos'>
            <InView as="div" className='infos' onChange={(inView, entry) => { if (inView) { setNavActive('infos') } }}>
                <h2>LE DOMAINE DU DENAIS</h2>
                <div className='infosContainer'>
                    <div className='infosContainer__video'>
                        {/* <iframe id="video-6-1_vimeo_iframe" frameborder="0" src="https://player.vimeo.com/video/205894013?loop=0&amp;_=1&amp;" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="autoplay" data-ready="true"></iframe> */}
                        <img src="/img/domaine du denais carte.PNG" alt="carte domaine du denais" />
                    </div>
                    <div className='infosContainer__text'>
                        <h3>OÙ ÇA ?</h3>
                        <p>Le Domaine du Denais se trouve sur la commune de SaintDenis-d’Anjou, petit village médiéval aux nombreux monuments classés.

                            Situé dans le département de la Mayenne, ce village est au centre d’un triangle formé par trois grandes villes : Angers (40km), Le Mans (70 km), Laval (49 km).
                        </p>
                        {/* <div className='linkContainer'>
                            <a className='linkContainer__linkButton glow-on-hover' href="/infospratiques">
                                <span>EN SAVOIR +</span>
                                <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                            </a>
                        </div> */}

                    </div>
                </div>
            </InView>
        </section>
    );
};

export default Infos;