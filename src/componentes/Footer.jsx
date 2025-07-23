import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiHelpCircle } from "react-icons/fi";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-links">
              <Link to="/ayuda" className="social-link help-link" aria-label="Ayuda">
                <FiHelpCircle />
                Ayuda
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
