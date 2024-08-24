import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <maim>
      <Sobre />
      <Project title="Projeto 1" description="Descrição do Projeto 1" />
      <Project title="Projeto 2" description="Descrição do Projeto 2" />
      </maim>
      <Footer />
    </div>
  );
}

export default App;
