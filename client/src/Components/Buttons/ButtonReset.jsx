import styles from "./Buttons.module.css"
import { useDispatch, useSelector } from "react-redux";
import {getAllDogs} from "../../redux/actions"

const ButtonReset = ()=>{
  const dispatch = useDispatch();

const handleClick = ()=>{
dispatch(getAllDogs())
}

  return (
      <button 
      className={styles.buttonReset}
      onClick={handleClick}></button>
    )}
export default ButtonReset