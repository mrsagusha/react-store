import { IItem } from '../../../interfaces/interfaces';
import styles from './RatingStars.module.css';

function RatingStars({ item }: { item: IItem | undefined }) {
  return (
    <div className={styles.rating} title={item?.rating.toString()}>
      <span className={item?.rating! >= 1 ? styles.active : ''}></span>
      <span className={item?.rating! >= 2 ? styles.active : ''}></span>
      <span className={item?.rating! >= 3 ? styles.active : ''}></span>
      <span className={item?.rating! >= 4 ? styles.active : ''}></span>
      <span
        className={Math.round(item?.rating!) === 5 ? styles.active : ''}
      ></span>
    </div>
  );
}

export default RatingStars;
