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
          description="O Recicla Aí é um site criado em React para conectar pessoas interessadas em reciclar 
          com aquelas que precisam descartar resíduos recicláveis de forma consciente. A plataforma conta com uma 
          área administrativa que permite a gestão e edição dinâmica do conteúdo, garantindo informações sempre atualizadas. 
          Para os usuários, o site oferece uma interface intuitiva onde podem visualizar e escolher locais de coleta próximos
          para descartar seus materiais recicláveis. O Recicla Aí visa facilitar a reciclagem e promover
          práticas sustentáveis, tornando o processo de descarte mais acessível e eficiente."
          image="/images/projeto1.jpg"  // Caminho para a imagem do projeto 1
          link="https://github.com/Karollayneer/PGM6-Resilia"  // Link para o projeto 1
        />

        <Project
          title="Cadastro de clientes"
          description="Este projeto é uma aplicação em Python que utiliza Tkinter para gerenciar cadastros de clientes, 
          armazenando dados em um banco de dados SQLite. Com uma interface intuitiva, ele permite adicionar, buscar, atualizar e
          deletar registros. Além disso, gera relatórios em PDF usando ReportLab."
          image="/images/projeto2.jpg"  // Caminho para a imagem do projeto 2
          link="https://github.com/Karollayneer/Tkinter"  // Link para o projeto 2
        />

        <Project
          title="Aplicativo de finança pessoal"
          description="O aplicativo de Controle Financeiro Pessoal desenvolvido em Python utiliza 
          Streamlit para criar gráficos interativos que ajudam a visualizar despesas e receitas. 
          Ele permite adicionar e atualizar dados financeiros, facilitando o acompanhamento das 
          finanças de forma simples e intuitiva."
          image="/images/projeto3.jpg"
          link="https://github.com/Karollayneer/Grafico_finan-a"
        />

        <Project
          title="Desenvolvimento de Aplicativo de Gerenciamento de Pacientes"
          description="Criei um aplicativo usando Flask e SQLite que permite adicionar, editar, pesquisar e excluir 
          pacientes de forma eficiente.
          Funcionalidades principais: 
          Cadastro e pesquisa de pacientes Edição e exclusão 
          com confirmação Geração de relatórios 🔧 
          Tecnologias: Flask, SQLAlchemy, Bootstra"
          image="/images/projeto4.jpg"
          link="https://github.com/Karollayneer/Site-nutri"
        />

        {/*
          <Project
          title="projeto 4"
          description="descriçãp"
          image="/images/projeto4.jpg" 
          link="link do projeto"  
        />*/}

        {/*
          <Project
          title="projeto 4"
          description="descriçãp"
          image="/images/projeto4.jpg" 
          link="link do projeto"  
        />*/}

        {/*
          <Project
          title="projeto 4"
          description="descriçãp"
          image="/images/projeto4.jpg" 
          link="link do projeto"  
        />*/}

      </main>
      <Footer />
    </div>
  );
}

export default App;


