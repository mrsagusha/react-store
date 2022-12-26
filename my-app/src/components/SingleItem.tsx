import { IItem } from '../interfaces/interfaces';
import { useParams } from 'react-router-dom';
import Button from './UI/Button/Button';
import FavouritesButton from './UI/Favourites/FavouritesButton';
import styles from './SingleItem.module.css';
import { useState } from 'react';
import { Params } from 'react-router-dom';

function SingleItem({
  items,
  isLoading,
  findItem,
  addFavourites,
}: {
  items: IItem[];
  isLoading: boolean;
  findItem(params: Readonly<Params<string>>): IItem | undefined;
  addFavourites(item: IItem): void;
}) {
  const params = useParams();
  const item = findItem(params);
  const [mainImageSrc, setMainImageSrc] = useState(item?.images[0]);

  return (
    <div className={styles.wrapper}>
      <h1>{item?.title}</h1>
      <FavouritesButton onClick={() => addFavourites(item!)} />
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
          <Button style={{ marginRight: '1vw' }}>Add to cart</Button>
          <Button>Buy</Button>
          <p className={styles.itemUnderTitle}>Brand:</p>
          <p>{item?.brand}</p>
          <p className={styles.itemUnderTitle}>Description:</p>
          <p>{item?.description}</p>
          <p className={styles.itemUnderTitle}>Rating:</p>
          <div className={styles.rating} title={item?.rating.toString()}>
            <span className={item?.rating! >= 1 ? styles.active : ''}></span>
            <span className={item?.rating! >= 2 ? styles.active : ''}></span>
            <span className={item?.rating! >= 3 ? styles.active : ''}></span>
            <span className={item?.rating! >= 4 ? styles.active : ''}></span>
            <span
              className={Math.round(item?.rating!) === 5 ? styles.active : ''}
            ></span>
          </div>
          <p className={styles.itemUnderTitle}>Stock:</p>
          <p>{item?.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
