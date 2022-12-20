import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IItem, IData } from './interfaces/interfaces';
import Main from './components/Main';
import './App.css';
import MainLayout from './layoutes/MainLayout';
import Cart from './components/Cart';
import SingleItem from './components/SingleItem';

const API_URL = 'https://dummyjson.com/products';

function App() {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: IData) => setItems(data.products))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<Main items={items} isLoading={isLoading} />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="/:title" element={<SingleItem items={items} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
