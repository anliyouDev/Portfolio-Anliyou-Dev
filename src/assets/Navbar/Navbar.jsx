import { useState, useEffect, useRef } from "react";
import logos from "../img/logv.mp4";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

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

    // Fermer le menu quand on clique à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                window.innerWidth <= 768 &&
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <>
            <nav className="nvbr">
                <Link to={"/"} className="nvbr-logo" onClick={closeMenu}>
                    <video src={logos} autoPlay muted loop></video>
                    <div className="nvbr-logo-text">
                        Anliyou <span>Dev</span>
                    </div>
                </Link>

                {/* Bouton hamburger / croix */}
                <div
                    ref={toggleRef}
                    className="menu-toggle"
                    onClick={toggleMenu}
                >
                    {menuOpen ? "✖" : "☰"}
                </div>

                {/* Menu mobile */}
                <ul
                    ref={menuRef}
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

                {/* Overlay pour fermer en cliquant à côté */}
                <div
                    className={menuOpen ? "nav-overlay active" : "nav-overlay"}
                    onClick={closeMenu}
                ></div>
            </nav>
        </>
    );
}

export default Navbar;
