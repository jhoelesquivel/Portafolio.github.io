import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faUserCog, faCogs, faEdit, faMobileAlt, faCode, faClipboardList } from '@fortawesome/free-solid-svg-icons'; 

const servicios = [
  {
    icon: faWrench,
    title: 'Mantenimiento',
    description: 'Mantenimiento y mejora continua de interfaces de usuario en sitios web y aplicaciones. Actualización de contenido y corrección de errores menores para asegurar una experiencia óptima.',
  },
  {
    icon: faUserCog,
    title: 'Desarrollo de Componentes de Interfaz',
    description: 'Creación de componentes reutilizables para aplicaciones web, como botones, tarjetas y modales, para un desarrollo más rápido y eficiente.'
  },
  {
    icon: faMobileAlt,
    title: 'Diseño Responsivo',
    description: 'Adaptación de sitios web para que sean completamente funcionales en dispositivos móviles y tabletas. Implementación de frameworks como Bootstrap o Bulma para un diseño adaptable.'
  },
  {
    icon: faCogs,
    title: 'Desarrollo de Sitios Web Básicos',
    description: 'Creación de sitios web estáticos utilizando HTML, CSS y JavaScript. Adaptación de plantillas y temas para WordPress o sistemas de gestión de contenido similares.'
  },
  {
    icon: faEdit,
    title: 'Mantenimiento y Actualización de Contenidos',
    description: 'Actualización de contenidos y diseño en sitios web existentes. Corrección de errores menores y mejoras en la interfaz de usuario para mantener la relevancia y funcionalidad.'
  },
  {
    icon: faCode,
    title: 'Desarrollo de Componentes de Interfaz',
    description: 'Creación de componentes reutilizables para una interfaz de usuario consistente y eficiente, como botones, modales y formularios.'
  },
  {
    icon: faClipboardList,
    title: 'Desarrollo de Formularios Web',
    description: 'Creación de formularios de contacto, encuestas o registros. Validación y manejo de formularios en el navegador para una interacción de usuario eficiente.'
  }
];

const ServicioCard = ({ icon, title, description }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className="service-card d-flex flex-column justify-content-between p-4 border border-info-subtle rounded bg-dark text-light h-100">
      <div className="icon mb-3 text-center">
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <h3 className="service-title mb-3 text-center">{title}</h3>
      <p className="service-description text-center">{description}</p>
    </div>
  </div>
);

const Servicios = () => {
  return (
    <section className="servicios container pt-5 text-white">
      <div className="text-center pb-2 card-title">
        <h1>Servicios</h1>
      </div>
      <div className="row">
        {servicios.map((servicio, index) => (
          <ServicioCard key={index} {...servicio} />
        ))}
      </div>
    </section>
  );
}

export default Servicios;
