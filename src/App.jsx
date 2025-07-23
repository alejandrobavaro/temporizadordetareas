import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderUnificado from "./componentes/HeaderUnificado";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainContent from "./componentes/MainContent";
import MainTemporizadorTareas from "./componentes/MainTemporizadorTareas";
import Footer from "./componentes/Footer";
import ConsultasAyuda from "./componentes/ConsultasAyuda";
import "./assets/scss/_01-General/_App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderUnificado />
        <div className="divider"></div>
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/MainTemporizadorTareas" element={<MainTemporizadorTareas />} />
              <Route path="/ayuda" element={<ConsultasAyuda />} />
            </Routes>
          </div>
        </div>
        <div className="divider"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
