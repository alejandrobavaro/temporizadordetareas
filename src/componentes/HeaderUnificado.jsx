import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado({ categories = [], onCategoryChange, searchQuery, setSearchQuery }) {
  const location = useLocation();
  const [showCotizaciones, setShowCotizaciones] = useState(false);


  const handleShowCotizaciones = () => setShowCotizaciones(true);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="header-unificado">
        <div className="contenedor-header">
          <div className="logo-y-dolar">
            <div className="logo">
              <Link to="/">
                <img 
                  src="/img/02-logos/logotemporizadordetareas1.png" 
                  alt="Logo Útiles de Oficina" 
                  className="logo-img" 
                />
              </Link>
            </div>
        
          </div>

          <nav className="nav-links">
            <Link to="/" className={isActive("/") ? "activo" : ""}>Inicio</Link>
           
            <Link to="/contacto" className={isActive("/contacto") ? "activo" : ""}>Contacto</Link>
            <Link to="/ayuda" className={isActive("/ayuda") ? "activo" : ""}>Ayuda</Link>
            
            
            <Link to="/MainTemporizadorTareas" className={isActive("/MainTemporizadorTareas") ? "activo" : ""}>Temporizador</Link>
          </nav>

          <div className="acciones-header">
            <Button variant="outline-primary" onClick={handleShowCotizaciones}>
              <i className="bi bi-currency-dollar"></i>
            </Button>
          </div>
        </div>
      </header>

    
    </>
  );
}

export default HeaderUnificado;