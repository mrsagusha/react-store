import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { IItem } from '../interfaces/interfaces';

function MainLayout({
  favouritesQuantity,
  itemsInCart,
}: {
  favouritesQuantity: string;
  itemsInCart: IItem[];
}) {
  return (
    <>
      <Header
        favouritesQuantity={favouritesQuantity}
        itemsInCart={itemsInCart}
      />
      <Outlet />
    </>
  );
}

export default MainLayout;
