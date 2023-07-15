import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getAllDogs , getTemperament} from "../../redux/actions"

import CardContainer from "../../Components/CardContainer/CardContainer"
import NavBar from "../../Components/NavBar/NavBar"

import styles from "./Home.module.css"

const Home =()=>{
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs)



  useEffect(()=>{
    dispatch(getAllDogs());
    // dispatch(getTemperament());
  },[dispatch])

  return (
    <div className={styles.home}>
      <h2 className={styles.homeTitle}>Home</h2>
      <NavBar/>
      <CardContainer/>
   </div>
  )
}
export default Home;