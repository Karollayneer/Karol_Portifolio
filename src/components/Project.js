import React from 'react';
import './Project.css'; // Importa o CSS do projeto

function Project({ title, description, image, link }) {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer" className="imageContainer">
        <img src={image} alt={title} className="image" />
      </a>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

export default Project;
