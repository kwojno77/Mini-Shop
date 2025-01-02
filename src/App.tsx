import { BrowserRouter, Routes, Route } from 'react-router';
import { Dashboard } from './pages/dashboard/Dashboard.tsx';
import { Cart } from './pages/cart/Cart.tsx';
import { Furniture } from './pages/category/Furniture.tsx';
import { Household } from './pages/category/Household.tsx';
import { Electronics } from './pages/category/Electronics.tsx';
import { Toys } from './pages/category/Toys.tsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/toys" element={<Toys />} />
          <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/household" element={<Household />} />
          <Route path="/category/furniture" element={<Furniture />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
