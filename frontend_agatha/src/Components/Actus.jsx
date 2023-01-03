import React, { useEffect, useState, useContext } from 'react';
import env from "react-dotenv";
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
//import Carousel from 'carousel-react-rcdev'
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';



const Actus = () => {
    // const { loading, error, data } = useFetch(env.API_URL + '/api/actuses')
    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/actuses?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>

    const { navActive, setNavActive } = useContext(MyContext);


    return (
        <section id='actus'>
            <InView as="div" className='actus' onChange={(inView, entry) => { if (inView) { setNavActive('actus') } }} >
                <h2>LES ACTUS</h2>
                <div className='actusContainer'>
                    {/* <Carousel>
                        {data.data.map(actus => (
                            <div key={actus.id} className="mycard">
                                <div className='mycard__text'>
                                    <h3>{actus.attributes.TitreActu} </h3>
                                    <Link to=''>LIRE +</Link>
                                </div>
                                <img src={API_URL + actus.attributes.imageActu.data.attributes.url} alt="" />
                            </div>
                        ))}
                    </Carousel> */}
                </div>
                <div className='linkContainer'>
                    <a className='linkContainer__linkButton glow-on-hover' href="/">
                        <span>DEVENIR BENEVOLE</span>
                        <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                    </a>
                </div>
            </InView>
        </section >
    );
};

export default Actus;