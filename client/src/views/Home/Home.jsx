import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getAllDogs , getTemperament, getDogByName} from "../../redux/actions"

import CardContainer from "../../Components/CardContainer/CardContainer"
import NavBar from "../../Components/NavBar/NavBar"

import styles from "./Home.module.css"

const Home =()=>{
  const dispatch = useDispatch();

  useEffect(() => {
  const fetchData = async () => {
    await dispatch(getAllDogs());
    await dispatch(getTemperament());
  };
  fetchData();
}, [dispatch]);

const allDogs = useSelector((state) => state.allDogs)
// const temperaments = useSelector((state) => state.temperament)
// const [filtered, setFiltered]= useState(allDogs)
const [searchString, setSearchString]=useState("")

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

function handleSubmit(event){
    event.preventDefault();
dispatch(getDogByName(searchString))
}

  //!Filtro de estado
  
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const filter= allDogs.filter((dog)=>((dog.name).toLowerCase()).includes(searchString));
  //   setFiltered(filter);
  // }



  return (
    <div className={styles.home}>
      {/* <h2 className={styles.homeTitle}>Home</h2> */}
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* <CardContainer allDogs={filtered}/> */}
      <CardContainer allDogs={allDogs}/>
   </div>
  )
}
export default Home;