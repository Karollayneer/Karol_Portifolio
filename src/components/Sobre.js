import React from 'react';

function Sobre() {
  return (
    <section style={styles.sobre}>
      <h2 style={styles.title}>Sobre</h2>
      <p style={styles.text}>
      Sou Karolayne Rodrigues, desenvolvedora especializada em backend e análise de dados, 
      com foco em soluções escaláveis e seguras. Python é minha principal linguagem, e 
      também tenho conhecimentos em React. Tenho experiência na criação de APIs e na transformação
       de dados em insights valiosos, sempre buscando novos desafios e tecnologias.
      </p>
    </section>
  );
}

const styles = {
  sobre: {
    backgroundColor: '#000',
    color: '#ff69b4',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '800px',
    textAlign: 'center',
    border: '2px solid #ff69b4',
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#ff69b4',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default Sobre;
