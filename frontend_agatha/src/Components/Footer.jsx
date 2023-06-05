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
                {navLink("/mentionslegales", "MENTIONS LEGALES")}
                {navLink("/contact", "CONTACT")}
                <a href="/#partenaires" className="footer__linkContainer--link">
                    <li className='content__item'>
                        <span className='link link--metis'>PARTENARIAT</span>
                    </li>
                </a>
                {/* {navLink("/", "PARTENARIAT")} */}
            </div>
        </footer>
    );
};

export default Footer;