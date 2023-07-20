/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from "react";
import styles from "./Paginado.module.css";

const Paginado = ({ dogsPerPage, allDogs, paginado }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(allDogs.length / dogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
    <nav>
      <ul className={styles.paginado}>
        {pageNumbers.map((number) => (
          
            <a key={number} onClick={() => paginado(number)}>
              {number}
            </a>
          
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Paginado;
