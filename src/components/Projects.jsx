// Projects.js
import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2>Mis Proyectos</h2>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
                {['Proyecto 1', 'Proyecto 2', 'Proyecto 3'].map((project, index) => (
                    <div key={index} style={{
                        backgroundColor: "#fff",
                        padding: "1.5rem",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        maxWidth: "300px",
                        transition: "transform 0.3s ease-in-out"
                    }}>
                        <h3>{project}</h3>
                        <p>Descripción breve del proyecto.</p>
                        <a href="#" style={{ textDecoration: "none", color: "#4a90e2" }}>Ver más</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
