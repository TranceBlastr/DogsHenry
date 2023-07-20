import React from 'react';
import ButtonLanding from '../Buttons/ButtonLanding';
import ButtonHome from '../Buttons/ButtonHome';
import styles from './FormNav.module.css';
import logo from '../../image/logo-landing.png';
const FormNav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
      <ButtonHome />
      </div>
      <div className={styles.center}>
      <img src={logo} alt="" className={styles.image} />
      
      </div>
      <div className={styles.right}>
      <ButtonLanding />

      </div>
    </div>
  );
};

export default FormNav;
