import React from 'react';
import Footer from '../Components/Footer';
import Header2 from '../Components/Header2';


const MentionsLegales = () => {
    return (
        <div className='Mentions'>
            <Header2 idHref="/" />
            <div className='Mentions__title'>
                <h2>MENTIONS LEGALES</h2>
            </div>
            <div className='Mentions__text'>
                <p>
                    <strong> Raison Sociale :</strong> Association loi 1901 AGATHA
                </p>
                <p>
                    <strong> Numéro SIRET :</strong> 922 035 670 00012
                </p>
                <p>
                    <strong> Hébergement :</strong><br /> OVH <br />
                    SAS au capital de 10 174 560 € <br />

                    RCS Lille Métropole 424 761 419 00045 <br />
                    Code APE 2620Z <br />
                    N° TVA : FR 22 424 761 419 <br />
                    Siège social : 2 rue Kellermann - 59100 Roubaix - France <br />

                    Président : Michel Paulin <br />
                    OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix. <br />


                </p>
                <p>
                    <strong> Responsable du site :</strong> Jean Choquet - contact@jeanchoquet.fr
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default MentionsLegales;