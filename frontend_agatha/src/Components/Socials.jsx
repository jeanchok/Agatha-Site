import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {




    return (
        <div className="wrapper">
            <h4>SUIVEZ-NOUS</h4>
            <div className='socialIcone__Container'>
                <a href="https://instagram.com/agatha.asso?igshid=YmMyMTA2M2Y=" target="_instagram" aria-label="Suivez-nous sur instagram">
                    <FontAwesomeIcon icon={faInstagram} size="3x" className='socialIcone__Container--icone' />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100089857322310" target="_facebook" aria-label="Suivez-nous sur facebook">
                    <FontAwesomeIcon icon={faFacebook} size="3x" className='socialIcone__Container--icone' />
                </a>
            </div>
        </div>
    );
};

export default Socials;