import { MdFavoriteBorder } from 'react-icons/md';
import styles from './FavouritesIcon.module.css';

function FavouritesIcon({ quantity }: { quantity: string }) {
  return (
    <div className={styles.favouritesWrapper}>
      <MdFavoriteBorder className={styles.favourites} title="Favourites" />
      <div className={styles.favouritesQuantityWrapper}>
        <p className={styles.favouritesQuantity}>{quantity}</p>
      </div>
    </div>
  );
}

export default FavouritesIcon;
