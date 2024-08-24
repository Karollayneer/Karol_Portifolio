import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <img src="/foto.jpg" alt="Karolayne Rodrigues" style={styles.photo} />
        <div>
          <h1>Karolayne Rodrigues</h1>
          <p>Desenvolvedora back end</p>
          <a href="/curriculo.pdf" download style={styles.button}>
            Baixar Currículo
          </a>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#000',
    color: '#ff69b4',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  button: {
    backgroundColor: '#ff69b4',
    color: '#fff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    display: 'inline-block',
  },
};

export default Header;
