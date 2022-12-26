import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import styles from './FavouritesButton.module.css';

function FavouritesButton({ onClick }: { onClick(): void }) {
  return (
    <div className={styles.favourites} onClick={onClick}>
      <MdFavoriteBorder className={styles.like} />
      <p>Favourites</p>
    </div>
  );
}

export default FavouritesButton;
