import React, { useContext, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';

const Infos = () => {
    const { navActive, setNavActive } = useContext(MyContext);
    const [className, setClassName] = useState('infos');
    return (
        <section id='infos'>

            <InView as="div" className={className} onChange={(inView, entry) => { if (inView) { setClassName('infos' + ' fade-in') } }}>
                <InView as="div" className='infosTitle' onChange={(inView, entry) => { if (inView) { setNavActive('infos'); console.log("infos"); } }}>

                    <h2>INFOS PRATIQUES</h2>
                </InView>
                <div className='infosContainer'>
                    <div className='infosContainer__video'>
                        <img src="/img/Plan daccès macro agatha.webp" alt="carte domaine du denais" />
                    </div>
                    <div className='infosContainer__text'>
                        <h3>ACCESSIBILITE</h3>
                        <p>
                            Le Festival AGATHA se déroulera sur la commune de Saint-Denis-d'Anjou (53290), petit village médiéval aux nombreux monuments classés et situé au centre d’un triangle formé par trois grandes villes : Angers, Le Mans et Laval. Une gare ferroviaire dessert la commune voisine de Sablé-sur-Sarthe, située à seulement 15 minutes en voiture. Cette gare est desservie par le TGV, ce qui la place à seulement 1 heure 10 de Paris. Pour vous rendre sur place, nous vous recommandons de privilégier le covoiturage.                 </p>
                        <div className='linkContainer'>
                            <a className='linkContainer__linkButton glow-on-hover' href="/infospratiques">
                                <span>EN SAVOIR +</span>
                                <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" className='arrowButton' />
                            </a>
                        </div>

                    </div>


                </div>
            </InView>
        </section>
    );
};

export default Infos;