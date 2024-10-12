import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_7fd54fj', 'template_4t253wq', refForm.current, 'cs5pXzlFjTPQb0eM8')
      .then((result) => {
        console.log('Email enviado con éxito:', result.text);
        alert('¡Tu mensaje ha sido enviado correctamente!');
      }, (error) => {
        console.error('Error al enviar el email:', error);
        alert('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.');
      });
  };

  return (
    <>
      <div className="contacto container py-5">
        <div className="row text-white justify-content-center border rounded bg-dark">
          <div className="col-md-8 mt-md-0 d-flex align-items-stretch text-white">
            <form ref={refForm} onSubmit={handleSubmit} className="formulario py-5">
              <h2 className="text-center card-title">Contacto</h2>
                <div className="row">
                  <div className="col-md-6 py-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="from_name" id="nombre" placeholder="Ingresar nombre" required/>
                  </div>
                  <div className="col-md-6 py-3">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" name="from_email" id="correo" placeholder="nombre@ejemplo.com" required/>
                  </div>
                </div>
                <div className="col py-2">
                  <label htmlFor="asunto" className="form-label">Asunto</label>
                  <input type="text" className="form-control" name="subject" id="asunto" placeholder="Escriba el asunto" required/>
                </div>
                <div className="mb-3 py-3">
                  <label htmlFor="comentarios" className="form-label">Comentarios</label>
                  <textarea className="form-control" name="message" id="comentarios" rows="13" placeholder="Comentarios" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Contacto;
