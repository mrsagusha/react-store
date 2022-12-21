import { useState, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useLocation, useSearchParams } from 'react-router-dom';
import './Search.module.css';
import styles from './Search.module.css';
import Input from './UI/Input/Input';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchText(searchParams.get('search')!);
    }
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchParams({ search: searchText });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <IoMdSearch className={styles.searchButton} />
    </form>
  );
}

export default Search;
