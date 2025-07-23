import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado() {
  return (
    <header className="header-unificado">
      <div className="contenedor-header">
        <div className="logo">
          <Link to="/">
            <img
              src="/img/02-logos/logotemporizadordetareas2.png"
              alt="Logo Temporizador de Tareas"
              className="logo-img"
            />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/MainTemporizadorTareas" className="temporizador-link">
            Temporizador
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderUnificado;
