import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuList from './screens/menu/menuList';
import CartPage from './screens/cart/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
