const Portafolio = () => {
    return (
        <>
            <header>
                <div className="header">
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
            <main className="container">
                <div className="boton-scroll">
                    <a href="#about" >
                        <img src="magdalena.png" alt="" />
                    </a>
                </div>
                <section id="about" className="section perfil">
                    <div className="Perfil-content">
                        <div>
                            <h1 className="typing" >Sobre Mí</h1>
                        </div>
                        <p>¡Hola! Soy Yesica Natalia Blum Carrero, estudiante de Desarrollo de Software con una gran pasión por la tecnología y la programación. Me encanta aprender y explorar diferentes áreas del desarrollo, desde bases de datos hasta diseño web, siempre buscando mejorar mis habilidades y crear soluciones eficientes.Mi enfoque es aprender de todo un poco, combinando habilidades de frontend y backend para construir aplicaciones completas y eficientes. Me motiva seguir creciendo como desarrolladora y enfrentar nuevos desafíos en el mundo de la tecnología.</p>
                    </div>
                    <div className="image-container">
                        <img src="2.jpg" alt="Mi Foto" />
                    </div>

                </section>
                <section id="technologies" className="section skills">
                    <h2>Tecnologías que uso</h2>
                    <div className="technologies">
                        <div className="tech"><img src="piton.png" alt="" /></div>
                        <div className="tech"><img src="visual-basico.png" alt="" /></div>
                        <div className="tech"><img src="javascript.png" alt="" /></div>
                        <div className="tech"><img src="mysql.png" alt="" /></div>
                        <div className="tech"><img src="html.png" alt="" /></div>
                    </div>
                </section>
                <section id="projects" className="section">
                    <h2>Proyectos</h2>
                    <div className="projects">
                        <div className="project-card">
                            <h3>GreenWork</h3>
                            <a href="https://github.com/StarFront/microproyectos_corredor" target="_blank" rel="noopener noreferrer">
                                <img src="corredor.png" alt="GitHub" />
                            </a>
                            <p>GreenWork es una plataforma web que conecta freelancers locales con oportunidades laborales en el Corredor Ecológico de Villavicencio (2,900 ha), entre el campus San Juan Eudes y la granja Agroecológica UNIMINUTO. Su objetivo es fomentar el empleo y reducir la informalidad en la prestación de servicios.</p>

                        </div>
                        <div className="project-card">
                            <h3>Gestión de productos</h3>
                            <a href="https://github.com/yesicablum/Frontendcockroachdb" target="_blank" rel="noopener noreferrer">
                                <img src="gestion.jpg" alt="GitHub" />
                            </a>
                            <p>El aplicativo web permite la gestión de productos mediante un CRUDE, optimizando el control de inventario y ventas en tiempo real. También ofrece la opción de descargar reportes detallados de ventas e inventario para análisis y toma de decisiones.</p>

                        </div>
                        <div className="project-card">
                            <h3>Calculadora Funcional</h3>
                            <a href=" https://github.com/yesicablum/CALCULADORA" target="_blank" rel="noopener noreferrer">
                                <img src="calculadora.png" alt="GitHub" />
                            </a>
                            <p>El proyecto Calculadora Funcional es una aplicación desarrollada para realizar operaciones matemáticas de manera eficiente e intuitiva. Su implementación permite ejecutar cálculos básicos con una interfaz amigable y funcional.</p>
                           
                        </div>
                    </div>
                </section>
                <section className="section">
                    <h2>Hoja de Vida</h2>
                    <a href="https://drive.google.com/file/d/1w07UkYqm_hh5OuUq02biCmusVPsvDxxe/view?usp=sharing" target="_blank" className="cv-button">Descargar Hoja de Vida</a>
                </section>
            </main>
            <footer>
                <p>© 2025 Yesica Natalia. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Portafolio;
