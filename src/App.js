import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Sobre />
        <Project
          title="Recicla ai"
          description="Descrição do Projeto 1. Este projeto envolveu o desenvolvimento de uma aplicação web com funcionalidades avançadas."
          image="/images/projeto1.jpg"  // Caminho para a imagem do projeto 1
          link="https://github.com/Karollayneer/PGM6-Resilia"  // Link para o projeto 1
        />
        <Project
          title="Projeto 2"
          description="Descrição do Projeto 2. Um projeto desafiador que focou na análise de dados e criação de relatórios personalizados."
          image="/images/projeto2.jpg"  // Caminho para a imagem do projeto 2
          link="https://link-para-o-projeto2.com"  // Link para o projeto 2
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;


