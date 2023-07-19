import Card from "../Card/Card";
import style from "./CardContainer.module.css"


const CardsContainer = ({allDogs}) => {
 
  return (
    <div className={style.cardContainer}>
      {allDogs?.map(dog=>
     <Card dog={dog}/>
        )}
    </div>
  );
};

export default CardsContainer;
