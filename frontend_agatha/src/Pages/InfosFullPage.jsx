import React, { useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import ModuleInfos from '../Components/ModuleInfos';
import Footer from '../Components/Footer';
import Header2 from '../Components/Header2';

const InfosFullPage = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/infos-pratiquess')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>




    return (
        <div className='InfosFullPage'>
            <img className='InfosFullPage__creeper' src="/img/liane vecto 4.webp" alt="illustration liane" />
            <Header2 idHref="/" />
            <h2>INFOS PRATIQUES</h2>
            <h3>QUELLE ORGANISATION SUR PLACE ?</h3>
            <div className='InfosFullPage__PlanContainer'>
            </div>
            <div className='InfosFullPage__infosContainer'>
                {
                    data.data ?
                        <>
                            {data.data.map((infos, index) => (
                                <ModuleInfos key={infos.id} text={infos.attributes.TexteInfosPratiques} title={infos.attributes.TitreInfosPratiques} />
                            ))}
                        </>
                        :
                        <h3 className='InfosFullPage__infosContainer--waiting'>Toutes les infos arrivent bientôt !</h3>
                }
            </div>
            <Footer />
        </div>
    );
};

export default InfosFullPage;