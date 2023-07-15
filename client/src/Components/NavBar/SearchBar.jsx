import styles from "./SearchBar.module.css"

function SearchBar () {
  return (
    <div className={styles.searchBox}>
      <form >
        <input placeholder="Busqueda"/>
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default SearchBar