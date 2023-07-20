import React from 'react';
import styles from './Buttons.module.css';

const ButtonSearch = ({ onClick }) => {
  return (
    <button type="submit" className={styles.buttonSearch} onClick={onClick}>
      Search!
    </button>
  );
};

export default ButtonSearch;
