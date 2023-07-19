import SearchBar from "./SearchBar"
import styles from "./NavBar.module.css"
import ButtonLanding from "../Buttons/ButtonLanding";
import ButtonForm from "../Buttons/ButtonForm";
import ButtonHome from "../Buttons/ButtonHome";

const NavBar = ({handleChange, handleSubmit}) => {
 
  return (
    <div className={styles.nav}>
    <div>
     <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
    
    <div>
    <ButtonLanding/>
    <ButtonHome/>
    <ButtonForm/>
    </div>
    </div>
  );
};

export default NavBar;

