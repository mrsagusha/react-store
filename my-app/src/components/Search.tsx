import { IoMdSearch } from 'react-icons/io';
import './Search.module.css';
import styles from './Search.module.css';

function Search() {
  return (
    <form>
      <input />
      <IoMdSearch className={styles.searchButton} />
    </form>
  );
}

export default Search;
