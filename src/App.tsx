// import { useState } from 'react'
// import { PageViews } from '@piwikpro/react-piwik-pro';
// // import { CustomEvent } from '@piwikpro/react-piwik-pro'
// import { Header } from './components/Header';
// import { Content } from './components/Content';
// import { products } from './data/products.ts';
// import { IProduct } from './types.ts';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Dashboard } from './pages/dashboard/Dashboard.tsx';
import { Cart } from './pages/category/Cart.tsx';
import { Furniture } from './pages/category/Furniture.tsx';
import { Household } from './pages/category/Household.tsx';
import { Electronics } from './pages/category/Electronics.tsx';
import { Toys } from './pages/category/Toys.tsx';

function App() {
  // PageViews.trackPageView('Main page');

  // const [seletedItems, setSeletedItems] = useState<Array<IProduct>>([]);

  // const handleProductSelection = (selectedProduct: IProduct, value: boolean) => {
  //   if (value) {
  //     console.debug('value', value);
  //     // TODO probably doesn't work correctly, debug it
  //     setSeletedItems((prev) => [...prev, selectedProduct]);
  //   } else {
  //     console.debug('value', value);
  //     setSeletedItems((prev) => prev.filter((product) => product.id !== selectedProduct.id))
  //   }
  // }

  // TODO add custom event tracking e.g.

  // CustomEvent.trackEvent('user_register_form', 'submit', 'Sent');

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/toys" element={<Toys />} />
          <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/household" element={<Household />} />
          <Route path="/category/furniture" element={<Furniture />} />
          <Route path="/category/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
