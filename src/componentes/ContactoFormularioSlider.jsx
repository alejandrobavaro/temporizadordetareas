import React from "react";
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

const ContactoFormularioSlider = () => {
  return (
    <div className="gridPadreContacto2">
      <div className="contact-form-slider-container">
        <div className="form-column box-shadow">
          <form
            className="contact-form"
            action="https://formspree.io/f/xbjnlgzz"
            target="_blank"
            method="post"
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="Ingresa tu teléfono"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto del Mensaje:</label>
              <input
                type="text"
                className="form-control"
                id="asunto"
                name="asunto"
                placeholder="Ingresa el asunto del mensaje"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Escribe tu mensaje aquí"
                required
              />
            </div>
            <div className="text-end">
              <button type="submit" className="btn-submit">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default ContactoFormularioSlider;
