// Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer style={{ padding: "1rem 0", backgroundColor: "#4a90e2", color: "#fff", textAlign: "center" }}>
            <p>© 2025 Tu Nombre. Todos los derechos reservados.</p>
            <div>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", margin: "0 1rem" }}>GitHub</a>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", margin: "0 1rem" }}>LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
