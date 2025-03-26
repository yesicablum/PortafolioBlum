const Portafolio = () => {
    return (
        <>
            <header>
                <div className="container">
                    <h1>Mi Portafolio</h1>
                    <nav>
                        <ul>
                            <li><a href="#about">Sobre Mí</a></li>
                            <li><a href="#technologies">Tecnologías</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section id="about" className="section">
                    <h2>Sobre Mí</h2>
                    <p>Hola, soy [Tu Nombre]. Soy desarrollador web apasionado por crear soluciones modernas y funcionales.</p>
                </section>
                <section id="technologies" className="section">
                    <h2>Tecnologías que uso</h2>
                    <div className="technologies">
                        <div className="tech">HTML</div>
                        <div className="tech">CSS</div>
                        <div className="tech">JavaScript</div>
                        <div className="tech">React</div>
                        <div className="tech">Node.js</div>
                    </div>
                </section>
                <section id="projects" className="section">
                    <h2>Proyectos</h2>
                    <div className="projects">
                        <div className="project-card">
                            <h3>Proyecto 1</h3>
                            <p>Descripción breve del proyecto.</p>
                        </div>
                        <div className="project-card">
                            <h3>Proyecto 2</h3>
                            <p>Descripción breve del proyecto.</p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <h2>Hoja de Vida</h2>
                    <a href="ruta-de-tu-cv.pdf" target="_blank" className="cv-button">Descargar Hoja de Vida</a>
                </section>
            </main>
            <footer>
                <p>© 2025 Tu Nombre. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Portafolio;
