import DataSearch from "../../data/search.json";
import SearchList from "./Components_Search/SearchList";
import SearchPopup from "./Components_Search/SearchPopup";
import styles from "./Search.module.css";
const Search = () => {
  return (
    
    <section className={styles.search}>
         {/*PHAN BEN TRAI */}
      <div className={styles.left}>
        <SearchPopup />
      </div>
         {/*PHAN BEN PHAI TRANG /SEARCH */}
      <div className={styles.right}>
        <SearchList onDataSearch={DataSearch} />
      </div>
    </section>
  );
};

export default Search;
