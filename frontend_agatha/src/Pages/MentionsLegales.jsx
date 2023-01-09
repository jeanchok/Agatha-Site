import React from 'react';
import Footer from '../Components/Footer';
import Header2 from '../Components/Header2';


const MentionsLegales = () => {
    return (
        <div className='Mentions'>
            <Header2 idHref="/" />
            <h2>MENTIONS LEGALES</h2>
            <p>
                <strong> Raison Sociale :</strong> Association loi 1901 AGATHA
            </p><p>
                <strong>Adresse :</strong> 10 Bel Air 35320 SAULNIERES
            </p><p>

                <strong> Numéro SIRET :</strong> 922 035 670 00012
            </p>

            <Footer />
        </div>
    );
};

export default MentionsLegales;