import React from 'react';
import styles from './Buttons.module.css'; // Asegúrate de importar el archivo de estilos correcto

const ButtonSearch = ({ onClick }) => {
  return (
    <button type="submit" className={styles.buttonSearch} onClick={onClick}>
      Search!
    </button>
  );
};

export default ButtonSearch;
