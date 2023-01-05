import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import styles from './Favourites.module.css';
import Button from './UI/Button/Button';
import FavouritesButton from './UI/Favourites/FavouritesButton';

function Favourites({ favourites }: { favourites: IItem[] }) {
  return (
    <div className={styles.favouritesItemsWrapper}>
      <h1 style={{ paddingBottom: '1vw' }}>Favourites</h1>
      {favourites.length === 0 ? (
        <h2 style={{ paddingBottom: '1vw' }}>
          You haven't added any products yet.
        </h2>
      ) : (
        favourites.map((el) => {
          return (
            <Fragment key={el.id}>
              <hr />
              <div className={styles.favouritesItem}>
                <Link
                  style={{ textAlign: 'center', overflow: 'hidden' }}
                  to={`/${el.title}`}
                >
                  <img
                    className={styles.favouritesItemImage}
                    src={el.images[0]}
                    alt={el.title}
                  />
                </Link>
                <div className={styles.favouritesItemInfo}>
                  <div className={styles.favouritemItemDescription}>
                    <p className={styles.favouritemItemTitle}>{el.title}</p>
                    <p>{el.description}</p>
                  </div>
                  <div className={styles.favouritemItemPriceInfo}>
                    <p className={styles.favouritemItemPrice}>{`${Math.floor(
                      el.price - el.price * (el.discountPercentage / 100)
                    )} $`}</p>
                    <p className={styles.discount}>{`${el.price} $`}</p>
                  </div>
                  <Button>Buy</Button>
                </div>
              </div>
            </Fragment>
          );
        })
      )}
    </div>
  );
}

export default Favourites;
