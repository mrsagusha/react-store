import { IoMdSearch } from 'react-icons/io';
import './Search.module.css';
import styles from './Search.module.css';
import Input from './UI/Input/Input';

function Search() {
  return (
    <form>
      <Input placeholder="Search..." />
      <IoMdSearch className={styles.searchButton} />
    </form>
  );
}

export default Search;
