import React, { useContext, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';

const Infos = () => {
    const { navActive, setNavActive } = useContext(MyContext);
    return (
        <section id='infos'>
            <InView as="div" className='infos' onChange={(inView, entry) => { if (inView) { setNavActive('infos') } }}>
                <h2>INFOS PRATIQUES</h2>
                <div className='infosContainer'>
                    <div className='infosContainer__video'>
                        {/* <iframe id="video-6-1_vimeo_iframe" frameborder="0" src="https://player.vimeo.com/video/205894013?loop=0&amp;_=1&amp;" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="autoplay" data-ready="true"></iframe> */}
                        <img src="/img/Plan d'accès macro agatha.png" alt="carte domaine du denais" />
                    </div>
                    <div className='infosContainer__text'>
                        <h3>ACCESSIBILITE</h3>
                        <p>
                            Agatha Festival se déroulera au domaine du Denais, sur la commune de Saint-Denis-d'Anjou (53290), petit village médiéval aux nombreux monuments classés. Le domaine se situe au centre d'un triangle formé par trois grandes villes : Angers, Le Mans et Laval. Une gare ferroviaire dessert la commune voisine de Sablé-sur-Sarthe, située à seulement 15 minutes en voiture. Cette gare est desservie par le TGV, ce qui la place à seulement 1 heure 10 de Paris. Pour vous rendre sur place, nous vous recommandons de privilégier le covoiturage, grâce au groupe Facebook AGATHA FESTIVAL - COVOITURAGE.
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