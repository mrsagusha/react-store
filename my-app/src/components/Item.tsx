import { useState, useEffect } from 'react';
import { IItem } from '../interfaces/interfaces';
import Button from './UI/Button/Button';
import RatingStars from './UI/RatingStars/RatingStars';
import styles from './Item.module.css';
import Loader from './UI/Loader/Loader';

function Item(props: IItem) {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    fetch(props.images[0])
      .then((res) => setIsLoad(true))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.itemCard}>
      <div className={styles.imageContainer}>
        <p className={styles.discountPercentage}>
          {`- ${Math.floor(props.discountPercentage)}%`}
        </p>
        {isLoad ? (
          <img
            className={styles.itemImage}
            src={props.images[0]}
            alt={props.title.toLocaleLowerCase()}
          />
        ) : (
          <Loader />
        )}
      </div>
      <div>
        <p className={styles.itemTitle}>{props.title}</p>
        <RatingStars item={props} />
        <p className={styles.price}>
          {`${Math.floor(
            props.price - props.price * (props.discountPercentage / 100)
          )} $`}
          <span className={styles.discount}>{`${props.price} $`}</span>
        </p>
        <Button>Buy</Button>
      </div>
    </div>
  );
}

export default Item;
