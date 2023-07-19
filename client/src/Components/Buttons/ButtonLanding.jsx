import { Link } from 'react-router-dom';
import styles from "./Buttons.module.css"
const ButtonLanding = ()=>{
  return (
<Link to="/">
      <button className={styles.button}>Landing</button>
</Link>
    )}
export default ButtonLanding