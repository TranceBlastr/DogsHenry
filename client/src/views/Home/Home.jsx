import CardContainer from "../../Components/CardContainer/CardContainer"
import NavBar from "../../Components/NavBar/NavBar"
import styles from "./Home.module.css"
const Home =()=>{
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getGames());
  //   dispatch(getGenres());
  // },[dispatch])
  return (
    <div className={styles.home}>
      <h2 className={styles.homeTitle}>Home</h2>
      <NavBar/>
      <CardContainer/>
   </div>
  )
}
export default Home;