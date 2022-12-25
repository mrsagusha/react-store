import { useParams } from 'react-router-dom';
import { IItem } from '../interfaces/interfaces';
import Button from './UI/Button/Button';
import Favourites from './UI/Favourites/Favourites';
import styles from './SingleItem.module.css';

function SingleItem({ items }: { items: IItem[] }) {
  const params = useParams();
  const item = items.find((el: IItem) => el.title === params.title);

  return (
    <div className={styles.wrapper}>
      <h1>{item?.title}</h1>
      <Favourites />
      <div className={styles.singleItemWrapper}>
        <img src={item?.images[0]} alt="" />
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
