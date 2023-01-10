import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header2 from '../Components/Header2';

const Contact = () => {
    const [message, setMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [object, setObject] = useState('');
    const [messageBody, setMessageBody] = useState('');
    const form = useRef();
    const EMAILJS = import.meta.env.VITE_EMAILJS;


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2isbus8', 'template_h6ufd39', form.current, EMAILJS)
            .then((result) => {
                console.log(result.text);
                setMessage(true);
                setEmail('');
                setNickname('');
                setObject('');
                setName('');
                setMessageBody('');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contactPage'>
            <Header2 />
            <h2>CONTACT</h2>
            <p>Remplissez le formulaire ci-dessous</p>
            <form className='contactForm' id='contact-form' ref={form} onSubmit={sendEmail} noValidate>

                <div className='formRow'>
                    <div className='col-6'>
                        <input
                            type='text'
                            name='name'
                            className='form-control formInput'
                            placeholder={`Nom`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        ></input>

                    </div>
                    <div className='col-6'>
                        <input
                            type='text'
                            name='nickname'
                            className='form-control formInput'
                            placeholder={`Prénom`}
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                        ></input>

                    </div>

                    <div className='col-6'>
                        <input
                            type='email'
                            name='email'
                            className='form-control formInput'
                            placeholder='Adresse email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        ></input>

                    </div>
                </div>

                <div className='col-6'>
                    <input
                        type='text'
                        name='object'
                        className='form-control formInput'
                        placeholder={`Objet`}
                        value={object}
                        onChange={(e) => setObject(e.target.value)}
                        required
                    ></input>

                </div>

                <div className='row formRow'>
                    <div className='col'>
                        <textarea
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
                        <img src="/img/pointes-de-fleches-fines-a-droite.png" alt="fleche" />
                    </button>
                </div>
                {message ? <p className='successMessage'>Votre message a bien été envoyé</p> : null}
            </form>
        </div>
    );
};

export default Contact;