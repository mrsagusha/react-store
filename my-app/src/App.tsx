import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import './App.css';
import MainLayout from './layoutes/MainLayout';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
