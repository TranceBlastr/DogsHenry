import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllDogs,
  getTemperament,
  getDogByName,
} from "../../redux/actions"

import CardContainer from "../../Components/CardContainer/CardContainer"
import NavBar from "../../Components/NavBar/NavBar"
import FilterBar from "../../Components/FilterBar/FilterBar";
import Paginado from "../../Components/Paginado/Paginado"

import styles from "./Home.module.css"


const Home =()=>{
  const dispatch = useDispatch();
  const allDogs= useSelector((state) => state.allDogs)

  //!-------Paginado
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [dogsPerPage, setDogsPerPage] = useState(8)
  const indexOfLastCharacter = currentPage * dogsPerPage
  const indexOfFirstCharacter = indexOfLastCharacter - dogsPerPage
  const currentCharacters = allDogs.slice(indexOfFirstCharacter,indexOfLastCharacter)

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }
  
  const [searchString, setSearchString]=useState("")
  

  
  
  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event){
    event.preventDefault();
    dispatch(getDogByName(searchString))
}



//!------------------------------------------------------------
useEffect(() => {
 if(allDogs.length===0){dispatch(getAllDogs());};  
  dispatch(getTemperament());
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [dispatch]);
//!------------------------------------------------------------
  return (
    <div className={styles.home}>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <FilterBar/>
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs}
        paginado={paginado}/>
      <CardContainer allDogs={currentCharacters}/>
   </div>
  )
}
export default Home;