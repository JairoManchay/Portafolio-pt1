import React from "react";
import "./About.css";
import imagenPrueba from "../media/imagenPrueba.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Les comento a lo que me dedico</h3>
        <p>
          Eres artista (fotografía, dibujo, pintura, video, escultura…) o
          artesano (ebanista, orfebre de dorado, dorador, alfarero, herrero,
          paisajista…), trabajas en la arquitectura, tienes una profesión
          digital (diseñador web, desarrollador web…), eres apasionado y muy
          creativo.
        </p>
      </div>
      <div className="about-img">
        <img src={imagenPrueba} alt="about" />
      </div>
    </div>
  );
};

export default About;
