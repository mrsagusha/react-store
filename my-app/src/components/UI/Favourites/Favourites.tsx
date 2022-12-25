import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import styles from './Favourites.module.css';

function Favourites() {
  return (
    <div className={styles.favourites}>
      <MdFavoriteBorder className={styles.like} />
      <p>Favourites</p>
    </div>
  );
}

export default Favourites;
