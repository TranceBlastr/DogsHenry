import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validate from './validate'; // Importar la función de validación desde el archivo validate.js
import styles from "./Form.module.css"
import { getTemperament, postDog } from '../../redux/actions';
import ButtonHome from "../../Components/Buttons/ButtonHome"
const Form = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTemperament())
  },[dispatch]) 
  
  const reduxTemperaments = useSelector(state => state.temperament);

  const [state, setState] = useState({
    name: '',
    image: '',
    
    heightMin: '',
    heightMax: '',
    
    weightMin: '',
    weightMax: '',
    
    lifeSpanMin: '',
    lifeSpanMax: '',
    temperament: [],
  });
  // const [newDog, setNewDog] = useState({
  //   name: '',
  //   image: '',
  //   height: '',
  //   weight: '',
  //   lifeSpan: '',
  //   temperament: [],
  // })
  const [errors, setErrors] = useState({
    name: '',
    image: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    lifeSpanMin: '',
    lifeSpanMax: '',
    temperament: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...state, [name]: value };
    const validationErrors = validate(updatedFormData);
    setErrors(validationErrors);
    setState(updatedFormData);
  };

  const handleTemperamentChange = (event) => {
    const selectedOption = event.target.value;
    const selectedOptions = state.temperament.slice();
    if (!selectedOptions.includes(selectedOption)) {
      selectedOptions.push(selectedOption); 
      setState((prevState) => ({
        ...prevState,
        temperament: selectedOptions,
      }));
      event.target.value = ""; 
    }else 
    event.target.value = ""; 
  };
  

  const handleClose = (temperamentOption) => {
    const remainingTemp = state.temperament.filter((elm) => elm !== temperamentOption);
    setState((prevState) => ({
      ...prevState,
      temperament: remainingTemp,
    }));
  };
   

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(state);
    setErrors(validationErrors);
  
    const height = `${state.heightMin} - ${state.heightMax} Cm`;
    const weight = `${state.weightMin} - ${state.weightMax} Kg`;
    const lifeSpan = `${state.lifeSpanMin} - ${state.lifeSpanMax} Years`;
  
    const newDogData = {
      name: state.name,
      image: state.image,
      height: height,
      weight: weight,
      lifeSpan: lifeSpan,
      temperament: state.temperament,
    };
  
    const hasErrors = Object.values(validationErrors).some((value) => value !== '');
    if (!hasErrors) {
      dispatch(postDog(newDogData));
      setState({
        name: '',
        image: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        lifeSpanMin: '',
        lifeSpanMax: '',
        temperament: ""
      });
    }
  };
  

  useEffect(() => {
    const validationErrors = validate(state);
    setErrors(validationErrors);
  }, [state]);
  
  return (
    <div>

    <form className= {styles.form} onSubmit={handleSubmit}>
{/*------------------------------------------------------------------------------------ */}      

        <h1>Creating a new dog!</h1>

{/*------------------------------------------------------------------------------------ */}

        <ButtonHome/>

{/*------------------------------------------------------------------------------------ */}

        <h3 >Breed name</h3>
      <div>
        <input 
        type="text" 
        name="name" 
        value={state.name} 
        onChange={handleChange}
        placeholder='Breed Name'
        />
        {errors.name && <p  className={styles.error}>{errors.name}</p>}
      </div>

{/*------------------------------------------------------------------------------------ */}

        <h3 >Image</h3>
      <div>
        <input 
        type="text" 
        name="image" 
        value={state.image} 
        onChange={handleChange} 
        placeholder='Image Url'
        min="0"/>
        {errors.image && <p  className={styles.error}>{errors.image}</p>}
      </div>

{/*------------------------------------------------------------------------------------ */}

        <h3 >Height</h3>
<div className={styles.ranges}>
        <input 
        type="number" 
        name="heightMin" 
        value={state.heightMin} 
        onChange={handleChange} 
        placeholder='Min'
        min="0"/>
        <label > to </label>
        <input 
        type="number" 
        name="heightMax" 
        value={state.heightMax} 
        onChange={handleChange} 
        placeholder='Max'
        min="0"/>
        <label >Cm </label>
</div>
      <div>
        {errors.heightMin && <p  className={styles.error}>{errors.heightMin}</p>}
        {errors.heightMax && <p  className={styles.error}>{errors.heightMax}</p>}
      </div>

{/*------------------------------------------------------------------------------------ */}

        <h3 >Weight </h3>
<div className={styles.ranges}>
        <input 
        type="number" 
        name="weightMin" 
        value={state.weightMin} 
        onChange={handleChange} 
        placeholder='Min'
        min="0"/>
        <label> to </label>
        <input 
        type="number" 
        name="weightMax" 
        value={state.weightMax} 
        onChange={handleChange} 
        placeholder='Max'
        min="0"/>
        <label >Kg </label>
</div>
      <div>
        {errors.weightMin && <p  className={styles.error}>{errors.weightMin}</p>}
        {errors.weightMax && <p  className={styles.error}>{errors.weightMax}</p>}
      </div>

{/*------------------------------------------------------------------------------------ */}

        <h3 >Life Span </h3>
<div className={styles.ranges}>
    
        <input 
        type="number" 
        name="lifeSpanMin" 
        value={state.lifeSpanMin} 
        onChange={handleChange} 
        placeholder='Min'
        min="0"/>
        <label > to </label>
        <input 
        type="number" 
        name="lifeSpanMax" 
        value={state.lifeSpanMax} 
        onChange={handleChange} 
        placeholder='Max'
        min="0"/>
        <label >Years </label>
</div>
      <div>
        {errors.lifeSpanMin && <p  className={styles.error}>{errors.lifeSpanMin}</p>}
        {errors.lifeSpanMax && <p  className={styles.error}>{errors.lifeSpanMax}</p>}
      </div>

{/*------------------------------------------------------------------------------------ */}

  <h3 >Dog temperament</h3>
<div className={styles.select}>
  <select
    onChange={handleTemperamentChange}>

  <option value=''>Select dog temperament</option>
    {reduxTemperaments && (reduxTemperaments.map((temperament) => (
      <option key={temperament.id} value={temperament.name} >
        {temperament.name}
      </option>
      )))}  
      
  </select>
  
  <div>
  {state.temperament && state.temperament.map((temperamentOption, index) => (
   <p key={index}>{temperamentOption}
      <button className={styles.close} onClick={() => handleClose(temperamentOption)}>
        x
      </button>
    </p>
))}

</div>
</div>
      <div>
        {errors.temperament && <p className={styles.error}>{errors.temperament}</p>}
      </div>

{/*------------------------------------------------------------------------------------ */}   

      <button className={styles.submit} type="submit" onClick={handleSubmit}>Submit</button>
      
    </form>
    </div>
  );
};
/*-------------------------------------------------------------------------------------- */
export default Form;
