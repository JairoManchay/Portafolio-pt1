import React from "react";
import "./About.css";
import imagenPresentacion from "../media/imagenPresentacion.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Les comento a lo que me dedico</h3>
        <p>
          Soy técnico de Ingieniería de Software con Inteligencia Artificial,
          egresado del instituto Técnico SENATI me desarrollo en el área de
          Front-End, tengo conocimientos en desarrollo de sitios web y diseño de
          interfaz de usuario, empleo conocimientos en HTML, CSS, JAVASCRIPT,
          NODEJS, REACT y en base de datos como HeidiSQL, MySQL workbench;
          conocimiento en oftilmatica como Word, Excel - avanzado; actualmente
          vengo estudiando Inglés en el instituto "Lidem" en donde vengo
          desarrollando mi nivel de intermedio-avanzado.
        </p>
      </div>
      <div className="about-img">
        <img src={imagenPresentacion} alt="about" />
      </div>
    </div>
  );
};

export default About;
