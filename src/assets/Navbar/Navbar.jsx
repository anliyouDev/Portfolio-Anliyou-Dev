import { useState, useEffect, useRef } from "react";
import logos from "../img/logv.mp4";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // Empêcher le scroll quand le menu est ouvert
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

    // Fermer le menu quand on clique à l'extérieur (uniquement sur mobile)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Vérifier si on est en mode mobile (largeur < 769px)
            if (window.innerWidth <= 768 && menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Fonction pour fermer le menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Fonction pour toggle le menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="nvbr">
                <Link to={"/"} className="nvbr-logo" onClick={closeMenu}>
                    <video
                        src={logos}
                        autoPlay
                        muted
                        loop
                    ></video>
                    <div className="nvbr-logo-text">
                        Anliyou <span>Dev</span>
                    </div>
                </Link>

                {/* Bouton hamburger */}
                <div
                    className="menu-toggle"
                    onClick={toggleMenu}
                >
                    {menuOpen ? "✖" : "☰"}
                </div>

                {/* Menu mobile avec ref */}
                <ul 
                    ref={mobileMenuRef}
                    className={menuOpen ? "nav-links active" : "nav-links"}
                >
                    <li><a href="#propos" onClick={closeMenu}>A PROPOS</a></li>
                    <li><a href="#Competences" onClick={closeMenu}>COMPETENCES</a></li>
                    <li><a href="#Projets" onClick={closeMenu}>PROJET</a></li>
                    <li>
                        <a href="#Contact" className="contact" onClick={closeMenu}>
                            ME CONTACTER
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;