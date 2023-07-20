import React, { useEffect } from 'react';
import styles from "./FilterBar.module.css"
import bone from "../../image/bone.png"
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperament,
  filterByTemperament,
  filterByOrigin,
  filterByOrder
} from "../../redux/actions"

const FilterBar = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperament)
  

  //!-----Temperament
  const handleTemperamentFilterChange = (event)=>{
    const selectedOption = event.target.value;
    if(selectedOption !=="Select dog temperament"){
      dispatch(filterByTemperament(selectedOption))
    }
  }
  //!-----Origin
  const handleOriginFilterChange = (event)=>{
    const selectedOption = event.target.value;
      dispatch(filterByOrigin(selectedOption))
  }








//!-----Order
  const handleOrderFilterChange = (event)=>{
    const selectedOption = event.target.value;
    if(selectedOption === "asc" || selectedOption === "desc")
      dispatch(filterByOrder(selectedOption))

  }
  //!-----Weight
  const handleWeightFilterChange = (event)=>{
    const selectedOption = event.target.value;
      dispatch(filterByOrigin(selectedOption))

  }







//!--------------------------------------------------------------
  return (

    <div className={styles.filterBar}>

      <img src={bone} alt="" className={styles.imageLeft}/>


      {/* Temperamento */}
      <label>Temperament:</label>
      <select onChange={handleTemperamentFilterChange}>
      <option value="">Select dog temperament</option>
      {allTemperaments && (allTemperaments.map((temperament) => (
     <option key={temperament.id} value={temperament.name} >
        {temperament.name}
      </option>
      )))}  
      </select>


      {/* Origen */}
      <label>Origin:</label>
      <select
        onChange={handleOriginFilterChange}>
        <option value="all">All</option>
        <option value="api">API</option>
        <option value="db">Database</option>
      </select>


      {/* Orden */}
      <label>Order:</label>
      <select
        onChange={handleOrderFilterChange}>
        {/* <option value="sel">Select order </option> */}
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>


       {/* Peso */}
       <label>Weight:</label>
      <select
        onChange={handleWeightFilterChange}>
        {/* <option value="sel">Select order </option> */}
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>


      <img src={bone} alt="" className={styles.imageRight}/>

    </div>
  );
};

export default FilterBar;
