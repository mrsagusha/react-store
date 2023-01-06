import { BsGithub } from 'react-icons/bs';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <p className={styles.footerDateInfo}>©2022 Online Store</p>
      <a
        href="https://github.com/mrsagusha/react-store"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className={styles.gitHubLogo} />
      </a>
    </div>
  );
}

export default Footer;
