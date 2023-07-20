import React from 'react';
import styles from './SearchBar.module.css';
import ButtonSearch from "../Buttons/ButtonSearch";
function SearchBar({ handleChange, handleSubmit }) {
  return (
    <div className={styles.searchBox}>
      <div>
        <form onChange={handleChange}>
          <input placeholder="Busqueda" type="search" />
        </form>
      </div>
      <div>
         <ButtonSearch onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default SearchBar;
