import React from 'react';

function Sobre() {
  return (
    <section style={styles.sobre}>
      <h2 style={styles.title}>Sobre</h2>
      <p style={styles.text}>
      Sou Karolayne Rodrigues, desenvolvedora especializada em backend e análise de dados. 
        Tenho paixão por criar soluções robustas e escaláveis, focando em performance e segurança. 
        Minha experiência inclui a construção de APIs eficientes, otimização de bancos de dados 
        e transformação de dados em insights estratégicos. Estou sempre em busca de novos desafios 
        e tecnologias para aprimorar minhas habilidades e contribuir para o sucesso dos projetos 
        em que trabalho.
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
