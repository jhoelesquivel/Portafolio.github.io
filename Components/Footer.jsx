import React from 'react'; // eslint-disable-line

const Footer = () => {
  return (
    <footer>
      <div className="footer container-fluid pt-4 bg-dark text-white">
        <div className="row text-center">
          <div className="col-lg-4 col-md-4 text-center py-5">
            <div className="intro">
              <div className="line indent-0">
                &lt;div className="container"&gt;
              </div>
              <div className="line indent-1">
                &lt;div className="row"&gt;
              </div>
              <div className="line indent-2">
                &lt;div className="col"&gt;
              </div>
              <div className="line indent-3 text-danger">
                &lt;h1&gt;Hola&lt;/h1&gt;
              </div>
              <div className="line indent-3 text-warning">
                &lt;h1&gt;soy&lt;/h1&gt;
              </div>
              <div className="line indent-3 text-primary">
                &lt;h1&gt;Jhoel Esquivel&lt;/h1&gt;
              </div>
              <div className="line indent-3 text-success">
                &lt;h1&gt;Front End Developer&lt;/h1&gt;
              </div>
              <div className="line indent-2">
                &lt;/div&gt;
              </div>
              <div className="line indent-1">
                &lt;/div&gt;
              </div>
              <div className="line indent-0">
                &lt;/div&gt;
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 footer-links text-center py-3 fs-4">
            <h4 className="fs-2 card-title">Enlaces útiles</h4>
            <ul className="list-unstyled">
              <li><i className="bx bx-chevron-right"></i> <a href="#" className="text-decoration-none text-white">Inicio</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#" className="text-decoration-none text-white">Sobre Mi</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#" className="text-decoration-none text-white">Programas</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#" className="text-decoration-none text-white">Proyectos</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#" className="text-decoration-none text-white">Servicios</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#" className="text-decoration-none text-white">Contacto</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 py-5">
            <h5 className="fs-2 card-title">Mis Redes Sociales</h5>
            <div className="social-links fs-3">
              <a href="https://m.facebook.com/jhoel.esquivel.90/" className="text-white text-decoration-none me-3"><i className="bi bi-facebook"></i></a>
              <a href="https://www.linkedin.com/in/jhoel-gerardtt-esquivel-vergara-734721318/" className="text-white text-decoration-none me-3"><i className="bi bi-linkedin"></i></a>
              <a href="https://www.instagram.com/023281j/" className="text-white text-decoration-none"><i className="bi bi-instagram"></i></a>
            </div>
            <h5 className="fs-2 card-title">Número de contacto</h5>
            <div><a href="tel:+56920784002" className="text-white text-decoration-none fs-5"><i className="bi bi-telephone-fill"> +56 9 20784002</i></a></div>
          </div>
          <div className="col-12 text-center fs-5 p-0 m-0">
            <p>&copy; {new Date().getFullYear()} Jhoel Esquivel. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
