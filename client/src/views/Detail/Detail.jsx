import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsById } from '../../redux/actions';
import { useParams } from 'react-router-dom';

import NavBar from "../../Components/NavBar/NavBar"

import styles from "./Detail.module.css"

const Detail = ()=> {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDogsById(id));
  }, [dispatch, id]);

  const dogDetail = useSelector(state => state.detail);
  
  
return(
  <div>
    <NavBar/>
  <div className={styles.detail}style={
    { '--background-image-url': `url(${dogDetail.image})` }}>

  <div className={styles.image}>
    <img src={dogDetail.image} alt="" />
        </div>

    <div className={styles.data}>
    <h1>{dogDetail.name}</h1>
    <h5>{`ID: ${dogDetail.id}`}</h5>
    <h3>{`Weight: ${dogDetail.weight}kgs`}</h3>
    <h3>{`Height: ${dogDetail.height}`}</h3>
    <h3>{`Life Span: ${dogDetail.lifeSpan}`}</h3>
    <h3>{`Temperament: ${dogDetail.temperament}.`}</h3>

    </div>

  </div>
  </div>
)
}
export default Detail