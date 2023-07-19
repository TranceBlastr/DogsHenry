import styles from "./SearchBar.module.css"

function SearchBar ({handleChange, handleSubmit}) {
  return (
    <div className={styles.searchBox}>
      <form onChange={handleChange}>
        <input placeholder="Busqueda" type="search"/>
        <button type="submit" onClick={handleSubmit}>
          Buscar
          </button>
      </form>
    </div>
  )
}

export default SearchBar