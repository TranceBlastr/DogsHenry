import SearchBar from "./SearchBar"
import styles from "./NavBar.module.css"
import ButtonLanding from "../Buttons/ButtonLanding";
import ButtonForm from "../Buttons/ButtonForm";
import ButtonHome from "../Buttons/ButtonHome";

const NavBar = ({handleChange, handleSubmit}) => {
 
  return (
    <div className={styles.nav}>
    <ButtonLanding/>
    <ButtonHome/>
    <ButtonForm/>
      
     <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default NavBar;

