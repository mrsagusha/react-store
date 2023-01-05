import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/logo.png';
import styles from './Header.module.css';
import FavouritesIcon from './UI/Favourites/FavouritesIcon';
import Cart from './Cart';
import { IItem } from '../interfaces/interfaces';

function Header({
  favouritesQuantity,
  itemsInCart,
  toggleItemInCart,
}: {
  favouritesQuantity: string;
  itemsInCart: IItem[];
  toggleItemInCart(item: IItem): void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  function changeHoveredOverHandler() {
    setIsHovered(true);
  }

  function changeHoveredOutHandler() {
    setIsHovered(false);
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      {useLocation().pathname === '/' && <Search />}
      <div className={styles.tabs}>
        <Link to="favourites">
          <FavouritesIcon quantity={favouritesQuantity} />
        </Link>
        <div
          className={styles.itemsInCartWrapper}
          onMouseOver={changeHoveredOverHandler}
          onMouseOut={changeHoveredOutHandler}
        >
          <AiOutlineShoppingCart className={styles.cart} title="Cart" />
          <div className={styles.itemsInCartQuantityWrapper}>
            <p className={styles.itemsInCartQuantity}>{itemsInCart.length}</p>
          </div>
          <Cart
            toggleItemInCart={toggleItemInCart}
            isHovered={isHovered}
            itemsInCart={itemsInCart}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
