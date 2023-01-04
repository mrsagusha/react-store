import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import styles from './FavouritesButton.module.css';

function FavouritesButton({
  onClick,
  isFavourite,
}: {
  onClick(): void;
  isFavourite: boolean;
}) {
  return (
    <div className={styles.favourites} onClick={onClick}>
      {isFavourite ? (
        <>
          <MdFavorite className={styles.like} />
          <p>Favourite</p>
        </>
      ) : (
        <>
          <MdFavoriteBorder className={styles.like} />
          <p>Favourite</p>
        </>
      )}
    </div>
  );
}

export default FavouritesButton;
