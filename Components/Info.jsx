import React from 'react'; // eslint-disable-line

const Info = () => {
  return (
    <div className="Informacion py-5">
      <div className="tarjeta container py-2 pb-0 d-md-block">
        <div className="card mb-3 border-2 bg-dark ">
        <h1 className="card-title text-center py-1">Sobre Mi</h1>
          <div className="row d-flex flex-column flex-md-row">
            <div className="col-md-5 order-1 order-md-2 text-center">
              <img src="https://images.stockcake.com/public/2/c/3/2c3d4c60-7387-41d1-853d-78b98d68f641_large/coding-at-night-stockcake.jpg" className="img-fluid rounded-start py-4" alt="Misión, Visión"/>
            </div>
            <div className="col-md-7 order-2 order-md-1 fs-5">
              <div className="card-body">
                <h2 className="card-title text-center">Me Presento</h2>
                <p>
                Soy Jhoel Esquivel, un entusiasta del desarrollo web y programador front-end en formación. Desde que descubrí mi pasión por la tecnología y el diseño, he estado dedicado a aprender y mejorar mis habilidades en la creación de sitios web interactivos y atractivos.
                </p>
              </div>
              <div className="card-body">
                <h2 className="card-title text-center">Habilidades</h2>
                <p>
                  Tengo un buen dominio de HTML5 y CSS3, lo que me permite estructurar y estilizar páginas web de manera efectiva.
                </p>
                <p>
                  Estoy en el proceso de aprender JavaScript para añadir interactividad y dinamismo a mis proyectos.
                </p>
                <p>  
                  Actualmente, estoy explorando Bootstrap para el diseño responsivo y React para el desarrollo de interfaces de usuario modernas.
                </p>
              </div>
              <div className="card-body">
                <h2 className="card-title text-center">Objetivos</h2>
                <p>
                Mi objetivo es seguir aprendiendo y creciendo como desarrollador front-end. Estoy constantemente buscando nuevos desafíos y oportunidades para aplicar mis habilidades y aprender de otros profesionales en este campo. Aspiro a trabajar en proyectos que no solo mejoren mis capacidades técnicas, sino que también aporten valor a los usuarios y clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
