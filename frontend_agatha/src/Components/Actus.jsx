import React, { useEffect, useState, useContext } from 'react';
// import env from "react-dotenv";
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';
import ModalActus from '../Components/ModalActus';



const Actus = () => {



    const [modalActive, setModalActive] = useState(false);
    const [propsModal, setPropsModal] = useState();



    if (modalActive) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/actuses?populate=*')
    const [className, setClassName] = useState('actus');
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>


    const { navActive, setNavActive } = useContext(MyContext);

    // useEffect(() => {
    //     populateActus();
    // }, []);

    // const populateActus = async () => {
    //     //await setActu(data.data);
    //     let actus = data.data;

    //     actus.map((actus, index) => (
    //         items.push(
    //             <div key={actus.id} className="mycard item" data-value={index + 1}>
    //                 <div className='mycard__text'>
    //                     <h3>{actus.attributes.TitreActu} </h3>
    //                     <ModalActus props={actus.attributes} />
    //                 </div>
    //                 <img src={API_URL + actus.attributes.imageActu.data.attributes.url} alt="" />
    //             </div>
    //         )

    //     ));
    //     if (data.data.length < 4) {
    //         const nbActustoAdd = data.data.length < 4 ? 4 - data.data.length : 0;
    //         for (let i = 1; i <= nbActustoAdd; i++) {
    //             items.unshift(defaultItem);
    //         }
    //     }
    // }

    const defaultItem = <div className="mycard item">
        <div className='mycard__text'>
            <h3>ACTUALITES A VENIR</h3>
        </div>
    </div>;

    let fakeActus = [];


    const items = [];


    if (data.data.length < 4) {
        const nbActustoAdd = data.data.length < 4 ? 4 - data.data.length : 0;
        for (let i = 1; i <= nbActustoAdd; i++) {
            items.push(defaultItem);
        }
    }

    let actus = (data.data).sort((a, b) => b.attributes.Ordre_Affichage - a.attributes.Ordre_Affichage);

    { console.log(actus) }
    actus.map((actus, index) => (
        items.unshift(
            <div key={actus.id} className="mycard item" data-value={index + 1}>
                <div className='mycard__text'>
                    <h3>{actus.attributes.TitreActu} </h3>

                </div>

                <button onClick={() => { setModalActive(!modalActive); setPropsModal(actus.attributes) }} className="btn-modal" >LIRE +</button>

                {actus.attributes.imageActu.data === null ?
                    <img src="./img/defaultActuimg.jpg" alt="carré maya" />
                    :
                    <img src={API_URL + actus.attributes.imageActu.data.attributes.url} alt={actus.attributes.TitreActu} />
                }
            </div>
        )

    ));

    const responsive = {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        1024: {
            items: 3,
            itemsFit: 'contain'
        },
    };

    return (
        <>

            <section id='actus'>
                <InView as="div" className={className} onChange={(inView, entry) => { if (inView) { setClassName('actus' + ' fade-in') } }} >
                    <div className='actusTitle'>
                        <h2>LES ACTUS</h2>
                    </div>
                    <InView as="div" onChange={(inView, entry) => { if (inView) { setNavActive('actus') } }} >

                    </InView>
                    <div className='actusContainer'>
                        <AliceCarousel mouseTracking items={items} paddingLeft={50}
                            paddingRight={50}
                            responsive={responsive}
                            disableDotsControls />


                        <img className='actusContainer__maya' src="/img/maya2.png" alt="illustration maya 2" />
                        <img className='actusContainer__creeper' src="/img/liane vecto.webp" alt="illustration liane" />

                    </div>

                </InView>
            </section >
            {
                modalActive && <ModalActus propsModal={propsModal} modalActive={modalActive} setModalActive={setModalActive} />
            }
        </>
    );
};

export default Actus;