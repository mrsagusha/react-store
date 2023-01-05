import { IItem } from '../interfaces/interfaces';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Params } from 'react-router-dom';
import Button from './UI/Button/Button';
import FavouritesButton from './UI/Favourites/FavouritesButton';
import styles from './SingleItem.module.css';
import RatingStars from './UI/RatingStars/RatingStars';

function SingleItem({
  items,
  isLoading,
  findItem,
  toggleFavourites,
  toggleItemInCart,
  favourites,
  itemsInCart,
  addItemInCart,
}: {
  items: IItem[];
  isLoading: boolean;
  findItem(params: Readonly<Params<string>>): IItem | undefined;
  toggleFavourites(item: IItem): void;
  toggleItemInCart(item: IItem): void;
  favourites: IItem[];
  itemsInCart: IItem[];
  addItemInCart(item: IItem): void;
}) {
  const params = useParams();
  const item: IItem | undefined = findItem(params);
  const [mainImageSrc, setMainImageSrc] = useState(item?.images[0]);
  const [isFavourite, setIsFavourite] = useState(favourites.includes(item!));

  function toggleIsFavourite() {
    !isFavourite ? setIsFavourite(true) : setIsFavourite(false);
  }

  return (
    <div className={styles.wrapper}>
      <h1>{item?.title}</h1>
      <FavouritesButton
        onClick={() => {
          toggleFavourites(item!);
          toggleIsFavourite();
        }}
        isFavourite={isFavourite}
      />
      <div className={styles.singleItemWrapper}>
        <div className={styles.imageSlider}>
          <div className={styles.sideImageSlider}>
            {item?.images.map((el) => {
              return (
                <img
                  key={Math.random()}
                  src={el}
                  alt={item.title}
                  onClick={() => {
                    setMainImageSrc(el);
                  }}
                />
              );
            })}
          </div>
          <img
            className={styles.mainItemImage}
            src={mainImageSrc ? mainImageSrc : item?.images[0]}
            alt=""
          />
        </div>
        <div>
          <p className={styles.itemUnderTitle}>
            {`${Math.floor(
              item?.price! - item?.price! * (item?.discountPercentage! / 100)
            )} $`}
            <span className={styles.discount}>{`${item?.price} $`}</span>
          </p>
          <Button
            style={
              itemsInCart.includes(item!)
                ? { backgroundColor: 'white', color: 'red', marginRight: '1vw' }
                : { marginRight: '1vw' }
            }
            onClick={() => toggleItemInCart(item!)}
          >
            {itemsInCart.includes(item!) ? 'In cart' : 'Add to cart'}
          </Button>
          <Link to="/checkout">
            <Button onClick={() => addItemInCart(item!)}>Buy</Button>
          </Link>
          <p className={styles.itemUnderTitle}>Brand:</p>
          <p>{item?.brand}</p>
          <p className={styles.itemUnderTitle}>Description:</p>
          <p>{item?.description}</p>
          <p className={styles.itemUnderTitle}>Rating:</p>
          <RatingStars item={item} />
          <p className={styles.itemUnderTitle}>Stock:</p>
          <p>{item?.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
