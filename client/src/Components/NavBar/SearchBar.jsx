import styles from "./SearchBar.module.css"

function SearchBar ({handleChange, handleSubmit}) {
  return (
    <div className={styles.searchBox}>
     <div>
      <form onChange={handleChange}>
        <input placeholder="Busqueda" type="search"/>
      </form>

     </div>
     <div>

        <button type="submit" onClick={handleSubmit}>
          Buscara
          </button>
     </div>
    </div>
  )
}

export default SearchBar