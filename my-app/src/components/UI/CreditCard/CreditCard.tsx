import styles from './CreditCard.module.css';

function CreditCard() {
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
        <input
          className={styles.cardInput}
          type="text"
          maxLength={4}
          placeholder="5280"
          required
        />
        <input
          className={styles.cardInput}
          type="text"
          maxLength={4}
          required
        />
        <input
          className={styles.cardInput}
          type="text"
          maxLength={4}
          required
        />
        <input
          className={styles.cardInput}
          type="text"
          maxLength={4}
          required
        />
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
          required
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
