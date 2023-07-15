import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
 
  return (
    <div className={style.cardContainer}>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>
  );
};

export default CardsContainer;
