import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MainLayout({ favouritesQuantity }: { favouritesQuantity: string }) {
  return (
    <>
      <Header favouritesQuantity={favouritesQuantity} />
      <Outlet />
    </>
  );
}

export default MainLayout;
