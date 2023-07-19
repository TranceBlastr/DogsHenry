import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({dog}) => {
  return (
    <Link to={`/home/${dog.id}`}>

      <div className={styles.card} >
        
        <img src={dog.image.url} alt="Unavailable" />
        <h1>Breed:</h1>
        <p>{dog.name}</p>
        <p>Temperament:</p>
        <p>{dog.temperament}</p>
      </div>
    </Link>
  );
};

export default Card;
