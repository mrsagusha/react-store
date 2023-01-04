import { BsCashStack, BsCreditCard2BackFill } from 'react-icons/bs';
import { MdOutlinePersonPinCircle } from 'react-icons/md';
import styles from './Payment.module.css';

function Payment({
  name,
  setPaymentMethod,
  paymentMethod,
}: {
  name: string;
  setPaymentMethod(name: string): void;
  paymentMethod: string;
}) {
  return (
    <div
      className={styles.paymentWrapper}
      onClick={() => setPaymentMethod(name)}
    >
      <div
        className={
          name === paymentMethod
            ? `${styles.paymentIconWrapper} ${styles.active}`
            : styles.paymentIconWrapper
        }
      >
        {name === 'cash' ? (
          <BsCashStack className={styles.paymentIcon} />
        ) : name === 'card' ? (
          <BsCreditCard2BackFill className={styles.paymentIcon} />
        ) : (
          <MdOutlinePersonPinCircle className={styles.paymentIcon} />
        )}
      </div>
      <p className={styles.paymentMethodDescription}>
        {name === 'cash'
          ? 'In cash'
          : name === 'card'
          ? 'By card on the website'
          : 'To the courier'}
      </p>
    </div>
  );
}

export default Payment;
