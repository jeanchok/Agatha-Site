import React, { useRef, useContext, useState } from 'react';
import Particles from "./Particules";
import Footer from '../Components/Footer';
import { InView } from 'react-intersection-observer';
import { MyContext } from '../Hooks/useContext';
import useFetch from '../Hooks/useFetch';
import emailjs from '@emailjs/browser';
import Stars from '../Components/Stars';

const Partenaires = (props) => {
    const [message, setMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');
    const [messageBody, setMessageBody] = useState('');
    const form = useRef();
    const EMAILJS = import.meta.env.VITE_EMAILJS;
    const [className, setClassName] = useState('partenaires');

    const { navActive, setNavActive } = useContext(MyContext);

    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/nos-partenairess?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Errror :</p>




    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2isbus8', 'template_2zuuq48', form.current, EMAILJS)
            .then((result) => {
                console.log(result.text);
                setMessage(true);
                setEmail('');
                setName('');
                setPhoneNumber('');
                setStatus('');
                setCompany('');
                setMessageBody('');
            }, (error) => {
                console.log(error.text);
            });
    };

    // let color = "white";
    // let direction = 90;
    // let shape = "circle";
    // let imageUrl = "";
    // let rotation = 0;
    // let speed = 10;
    // let yVariance = 0;
    // let drift = 0;
    // let minAlpha = 0.8;
    return (
        <section id='partenaires'>
            <InView as="div" className={className} onChange={(inView, entry) => { if (inView) { setClassName('partenaires' + ' fade-in') } }}>
                {/* <div className='partenairesText'>
                    <h2>DEVENIR PARTENAIRE</h2>
                </div> */}
                <InView as="div" className='partenairesText' onChange={(inView, entry) => { if (inView) { setNavActive('partenaires'); console.log("partenaires") } }}>
                    <h2>DEVENIR PARTENAIRE</h2>
                </InView>
                {/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form> */}
                <form className='contactForm' id='contact-form' ref={form} onSubmit={sendEmail} noValidate aria-label="Contact pour devenir partenaire">

                    <div className='formRow'>
                        <div className='col-6'>
                            <input
                                aria-label="Nom de l'entreprise"
                                type='text'
                                name='company'
                                className='form-control formInput'
                                placeholder={`Nom de l'entreprise`}
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            ></input>

                        </div>
                        <div className='col-6'>
                            <input
                                aria-label="Nom de la personne"
                                type='text'
                                name='name'
                                className='form-control formInput'
                                placeholder={`Nom de la personne`}
                                value={name}
                                autoComplete="nickname"
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></input>

                        </div>
                        <div className='col-6'>
                            <input
                                aria-label="Fonction au sein de l'entreprise"
                                type='text'
                                name='status'
                                className='form-control formInput'
                                placeholder={`Fonction au sein de l'entreprise`}
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            ></input>

                        </div>

                        <div className='col-6'>
                            <input
                                aria-label="Numéro de téléphone"
                                type='text'
                                name='phoneNumber'
                                className='form-control formInput'
                                placeholder={`Numéro de téléphone`}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                autoComplete="nickname"
                            ></input>

                        </div>
                        <div className='col-6'>
                            <input
                                aria-label="Adresse email"
                                type='email'
                                name='email'
                                autoComplete="email"
                                className='form-control formInput'
                                placeholder='Adresse email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            ></input>

                        </div>
                    </div>



                    <div className='row formRow'>
                        <div className='col'>
                            <textarea
                                aria-label="Description de la demande"
                                rows={3}
                                name='message'
                                className='form-control formInput'
                                placeholder='Description de la demande'
                                value={messageBody}
                                onChange={(e) => setMessageBody(e.target.value)}
                                required                                ></textarea>

                        </div>
                    </div>
                    <div className='linkContainer'>
                        <button type='submit' className='linkContainer__linkButton glow-on-hover'>
                            <span>ENVOYER</span>
                            <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" className='arrowButton' />
                        </button>
                    </div>
                    {/* <button className='submit-btn' type='submit'>
                        Envoyer
                    </button> */}
                    {message ? <p className='successMessage'>Votre message a bien été envoyé</p> : null}
                </form>


                <div className='partenairesContainer'>
                    {data ? data.data.map(partenaires => (
                        <div key={partenaires.id} className={"partenairesContainer__card item" + partenaires.id}>

                            <img src={API_URL + partenaires.attributes.LogoPartenaire.data.attributes.url} alt="" />
                            <div className='partenairesContainer__card--text'>
                                <h4>{partenaires.attributes.NomPartenaire} </h4>
                            </div>
                        </div>
                    )) : null}
                    <img className='partenairesContainer__maya' src="/img/maya1.webp" alt="maya illustration" />
                    {/* <Particles minAlpha={minAlpha} drift={drift} yVariance={yVariance} rotation={rotation} speed={speed} color={color} direction={direction} shape={shape} imageUrl={imageUrl} /> */}
                </div>
                <Stars />
            </InView>
            <Footer />

        </section>
    );
};

export default Partenaires;