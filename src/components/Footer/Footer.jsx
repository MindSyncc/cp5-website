import { FooterStyle } from "../Footer/FooterStyle";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterStyle>
<footer className="footer text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>VoltsDrive</h5>
            <p>Um jogo de simulação de corridas emocionantes com muita estratégia.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#produto" className="text-white">Produto</a></li>
              <li><a href="#sobre" className="text-white">Sobre</a></li>
              <li><a href="#contato" className="text-white">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Redes Sociais</h5>
            <a href="#" className="text-white me-3"><FaFacebook size={30} /></a>
            <a href="#" className="text-white me-3"><FaTwitter size={30} /></a>
            <a href="#" className="text-white me-3"><FaInstagram size={30} /></a>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; 2024 VoltsDrive. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    </FooterStyle>
  );
};

export default Footer;
