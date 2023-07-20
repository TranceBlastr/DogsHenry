import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Landing.module.css";
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/actions';

const Landing = () => {
const dispatch = useDispatch()
useEffect (()=>{
  dispatch(getAllDogs())
}, [dispatch])

return (
    <div className={styles.landing}>
      <div className={styles.divLeft}>
        
      <Link to="/home" className={styles.divLeft} />
        
      </div>
      <div className={styles.divRight}>
        <h1>¡Bienvenido a nuestra aplicación!</h1>
        <p>Estamos encantados de tenerte aquí y presentarte el emocionante mundo de razas caninas. 
          Ya sea que sea un usuario nuevo o experimentado, nuestra aplicación está diseñada para mejorar su experiencia y hacer su vida más fácil.
Con nuestra aplicación, descubrirá una interfaz fluida e intuitiva que pone todo lo que necesita saber de sobre cada uno de nustros amigos de cuatro patas al alcance de su mano.</p>
<p>Queremos contarle al mundo que cada perro es único, con sus características físicas y temperamentos peculiares. </p>
        <p>Este proyecto ha sido desarrollado dentro del marco teorico del bootcamp de SoyHenry™ dentro de la etapa de "proyecto individual."</p>
        <p>Desarrollo: Brian Andrais.</p>
        
      </div>
      
    </div>
  );
};

export default Landing;
