import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {


    function navLink(to, text) {
        return (
            <Link
                to={to}
                className="footer__linkContainer--link"

            >
                <li className='content__item'>
                    <span className='link link--metis'>{text}</span>
                </li>
            </Link>
        );
    }

    return (
        <footer>
            <div className='footer__topline'></div>
            <div className='footer__linkContainer'>
                {navLink("mentionslegales", "MENTIONS LEGALES & CGV")}
                {navLink("contact", "CONTACT")}
                {navLink("partenariat", "PARTENARIAT")}
                <a className='footer__linkContainer--link' href="https://forms.gle/jre4ZCbTBnWh7bKo9" target="_blank">
                    <li className='content__item'>
                        <span className='link link--metis'>BENEVOLAT</span>
                    </li>
                </a>


            </div>
        </footer>
    );
};

export default Footer;