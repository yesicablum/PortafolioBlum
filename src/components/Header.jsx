// Header.js
import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Mi Portafolio</h1>
            <nav>
                <ul style={{ listStyle: "none", display: "flex", gap: "1rem", padding: 0 }}>
                    <li><a href="#about" style={{ textDecoration: "none", color: "#fff" }}>Sobre Mí</a></li>
                    <li><a href="#projects" style={{ textDecoration: "none", color: "#fff" }}>Proyectos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
