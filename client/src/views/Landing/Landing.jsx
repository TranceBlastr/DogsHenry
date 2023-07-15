import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.divLeft}>
        
      <Link to="/home" className={styles.divLeft} />
        
      </div>
      <div className={styles.divRight}>
        <h1>¡Bienvenido a nuestra aplicación!</h1>
        <p>Estamos encantados de tenerte aquí y presentarte nuestro emocionante mundo de posibilidades. Ya sea que sea un usuario nuevo o experimentado, nuestra aplicación está diseñada para mejorar su experiencia y hacer su vida más fácil.
Con nuestra aplicación, descubrirá una interfaz fluida e intuitiva que pone todo lo que necesita al alcance de su mano.</p>
        <p>Este proyecto ha sido desarrollado dentro del marco teorico del bootcamp de Henry™ dentro de la etapa de "proyecto individual."</p>
        <p>Desarrollado por el alumno Brian Andrais.</p>
      </div>
      
    </div>
  );
};

export default Landing;
