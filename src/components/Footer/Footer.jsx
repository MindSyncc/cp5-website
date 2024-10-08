import { FooterStyle } from "../Footer/FooterStyle";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>VoltsDrive</h5>
              <p>
                Aqui você encontra as melhores opções disponíveis no mercado.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Links</h5>
              <div className="d-flex justify-content-between">
                {" "}
                {/* Usar flexbox para alinhar */}
                <ul className="list me-3">
                  {" "}
                  {/* Margem à direita */}
                  <li>
                    <a href="#home" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#produto" className="text-white">
                      Produto
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="text-white">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="text-white">
                      Contato
                    </a>
                  </li>
                </ul>
                <ul className="list2">
                  <li>
                    <a href="#" className="text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Notícias
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Dúvidas Gerais
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <h5>Redes Sociais</h5>
              <a href="#" className="text-white me-4">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white me-4">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white me-4">
                <FaInstagram size={30} />
              </a>
              <a href="mailto:exemplo@dominio.com" className="text-white me-4">
                <FaEnvelope size={30} />
              </a>
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
