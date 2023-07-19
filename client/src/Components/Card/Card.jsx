import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({dog}) => {
  return (
    <Link to={`/home/${dog.id}`}>

      <div className={styles.card} >
        
        <img src={dog.image.url || dog.image} alt="Unavailable" />
        {/* <h1>Breed:</h1> */}
        <h1>{dog.name}</h1>
       <h3>Temperament</h3>
        <p>{dog.temperament}</p>
      </div>
    </Link>
  );
};

export default Card;
