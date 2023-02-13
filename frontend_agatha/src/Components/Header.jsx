import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from "react-router-dom";
//import { Link } from "react-scroll";
import { MyContext } from '../Hooks/useContext';


const Header = () => {
    const elementIds = ['accueil', 'actus', 'programmation', 'infos', 'partenaires'];
    const [isActive, setIisActive] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { navActive, setNavActive } = useContext(MyContext);
    const [menuClass, setMenuClass] = useState(false);

    const changeClass = () => {
        setMenuClass(!menuClass);
    }

    const scrollToSection = (e, to) => {
        e.preventDefault();
        const element = document.getElementById(to);
        element.scrollIntoView({ behavior: 'smooth' });
    };



    function navLink(to, text) {
        return (
            <Link
                to={to}
                className={(navActive == to) ? "nav-active" : ""}
                onClick={(e) => {
                    scrollToSection(e, to);
                    changeClass();
                }}
                style={{ color: (navActive == 'accueil') ? 'black' : 'white' }}
            >
                <li className='content__item'>
                    <span className='link link--metis'>{text}</span>
                </li>
            </Link>

        );

    }





    return (
        <nav className='navbar'>
            <div className='navbar__buttonContainer'>
                <button className='navbar__buttonContainer--button'>
                    <svg className='navbar__buttonContainer--icone' version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path className='navbar__buttonContainer--icone' d="M387 892 c-338 -339 -387 -391 -387 -417 0 -25 14 -45 73 -103 78
-78 101 -86 144 -52 34 27 69 25 98 -5 30 -29 32 -64 5 -98 -34 -44 -26 -66
53 -145 57 -57 79 -72 102 -72 26 0 81 51 418 388 338 339 387 391 387 417 0
25 -14 45 -73 103 -78 78 -101 86 -144 52 -34 -27 -69 -25 -98 5 -30 29 -32
64 -5 98 34 44 26 66 -53 145 -57 57 -79 72 -102 72 -26 0 -81 -51 -418 -388z
m441 163 c-29 -140 87 -256 227 -227 42 8 53 7 68 -6 17 -15 -2 -35 -315 -349
-314 -314 -334 -332 -349 -315 -15 14 -16 24 -7 67 29 140 -87 256 -227 227
-42 -8 -53 -7 -68 6 -17 15 2 35 315 349 314 314 334 332 349 315 15 -14 16
-24 7 -67z"/>
                            <path className='navbar__buttonContainer--icone' d="M558 752 c-89 -89 -108 -113 -108 -138 0 -38 16 -54 55 -54 25 0 48
18 138 108 113 113 127 141 89 175 -38 34 -61 22 -174 -91z"/>
                            <path className='navbar__buttonContainer--icone' d="M638 562 c-63 -63 -71 -89 -38 -122 33 -33 59 -25 122 38 63 63 71
89 38 122 -33 33 -59 25 -122 -38z"/>
                        </g>
                    </svg>
                    <h3>BILLETTERIE</h3>
                </button>

            </div>
            <button className={!menuClass ? "mobileMenu container" : "mobileMenu container change"} onClick={changeClass}>
                <div style={{ backgroundColor: (navActive == 'accueil' && !menuClass) ? 'black' : 'white' }} className="bar1"></div>
                <div style={{ backgroundColor: (navActive == 'accueil' && !menuClass) ? 'black' : 'white' }} className="bar2"></div>
                <div style={{ backgroundColor: (navActive == 'accueil' && !menuClass) ? 'black' : 'white' }} className="bar3"></div>
            </button>
            <ul className={!menuClass ? 'none' : 'list'}>
                {navLink("accueil", "ACCUEIL")}
                {navLink("programmation", "PROGRAMMATION")}
                {navLink("actus", "ACTUS")}
                {navLink("infos", "INFOS PRATIQUES")}
                {navLink("partenaires", "PARTENAIRES")}
            </ul>
        </nav>

    );
};

export default Header;