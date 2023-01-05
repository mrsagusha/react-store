import { useState, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';
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
    searchParams.set('search', searchText);
    setSearchParams(searchParams);
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
      <IoMdSearch className={styles.searchButton} onClick={handleSubmit} />
    </form>
  );
}

export default Search;
