import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({id, image, breed, temperament }) => {
  return (
    <Link to={`/${id}`}>
      <div className={styles.card} >
        <img src={image} alt="Unavailable" />
        <p>Breed: </p>
        <p>{breed}</p>
        <p>Temperament:</p>
        <p>{temperament}</p>
      </div>
    </Link>
  );
};

export default Card;
