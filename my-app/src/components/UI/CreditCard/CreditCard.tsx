import { useForm } from 'react-hook-form';
import styles from './CreditCard.module.css';
import { IFormInput } from '../../../interfaces/interfaces';

function CreditCard() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });
  return (
    <div className={styles.creditCard}>
      <h2>Bank of Lorem</h2>

      <span className={`${styles.provider} ${styles.mastercard}`}>
        MasterCard
      </span>
      <span className={`${styles.provider} ${styles.amex}`}>
        American Express
      </span>
      <span className={`${styles.provider} ${styles.visa}`}>Visa</span>
      <div className={styles.number}>
        <label>
          <input
            className={styles.cardInput}
            style={
              errors.cardNumber1
                ? { border: '1px red solid', color: 'red' }
                : { border: '0' }
            }
            placeholder="5280"
            maxLength={4}
            {...register('cardNumber1', {
              required: 'All fields are required.',
              minLength: {
                value: 4,
                message: 'Must be at least four characters.',
              },
            })}
          />
          {errors.cardNumber1 && (
            <div className={styles.errorWrapper}>
              <p className={styles.errorMessage}>
                {errors.cardNumber1.message}
              </p>
            </div>
          )}
        </label>
        <label>
          <input
            className={styles.cardInput}
            style={
              errors.cardNumber2
                ? { border: '1px red solid', color: 'red' }
                : { border: '0' }
            }
            maxLength={4}
            {...register('cardNumber2', {
              required: 'All fields are required.',
              minLength: {
                value: 4,
                message: 'Must be at least four characters.',
              },
            })}
          />
          {errors.cardNumber2 && (
            <div className={styles.errorWrapper}>
              <p className={styles.errorMessage}>
                {errors.cardNumber2.message}
              </p>
            </div>
          )}
        </label>
        <label>
          <input
            className={styles.cardInput}
            style={
              errors.cardNumber3
                ? { border: '1px red solid', color: 'red' }
                : { border: '0' }
            }
            maxLength={4}
            {...register('cardNumber3', {
              required: 'All fields are required.',
              minLength: {
                value: 4,
                message: 'Must be at least four characters.',
              },
            })}
          />
          {errors.cardNumber3 && (
            <div className={styles.errorWrapper}>
              <p className={styles.errorMessage}>
                {errors.cardNumber3.message}
              </p>
            </div>
          )}
        </label>
        <label>
          <input
            className={styles.cardInput}
            style={
              errors.cardNumber4
                ? { border: '1px red solid', color: 'red' }
                : { border: '0' }
            }
            maxLength={4}
            {...register('cardNumber4', {
              required: 'All fields are required.',
              minLength: {
                value: 4,
                message: 'Must be at least four characters.',
              },
            })}
          />
          {errors.cardNumber4 && (
            <div className={styles.errorWrapper}>
              <p className={styles.errorMessage}>
                {errors.cardNumber4.message}
              </p>
            </div>
          )}
        </label>
        <span className={styles.instructions}>5280</span>
      </div>
      <div className={styles.date}>
        <span className={`${styles.instructions} ${styles.valid}`}>
          Valid Thru
        </span>
        <input
          className={styles.cardInput}
          type="text"
          maxLength={5}
          placeholder="00/00"
          {...register('cardDate', {
            required: 'The field is required.',
            pattern: {
              value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
              message: 'Invalid data',
            },
          })}
        />
        <span className={`${styles.instructions} ${styles.valid}`}>CVV</span>
        <input
          className={styles.cardInput}
          type="text"
          maxLength={3}
          placeholder="123"
          required
        />
      </div>
      <div className={styles.name}>
        <input
          className={`${styles.fullName} ${styles.cardInput}`}
          type="text"
          inputMode="numeric"
          placeholder="John Doe"
          required
        />
        <span className={styles.instructions}>Name on Card</span>
      </div>
      <div className={styles.shine}></div>
      <div className={`${styles.shine} ${styles.shineLayerTwo}`}></div>
    </div>
  );
}

export default CreditCard;
