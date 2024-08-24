import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Karolayne Rodrigues</p>
      <div style={styles.links}>
        
        <a href="https://www.linkedin.com/in/karolayne-rodrigues-794164245/" target="_blank" rel="noopener noreferrer" style={styles.link}>
          LinkedIn
        </a>
        <a href="https://github.com/Karollayneer" target="_blank" rel="noopener noreferrer" style={styles.link}>
          GitHub
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c2c2c',  // Tom de cinza escuro
    color: '#d3d3d3',  // Tom de cinza claro
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid #444',  // Linha de separação sutil
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: '#ff69b4',  // Rosa para destacar os links
    margin: '0 10px',
    textDecoration: 'none',
  },
};

export default Footer;
