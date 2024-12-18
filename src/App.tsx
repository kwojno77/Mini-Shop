import { useState } from 'react'
import { PageViews } from '@piwikpro/react-piwik-pro';
// import { CustomEvent } from '@piwikpro/react-piwik-pro'
import { Header } from './components/Header';
import { Content } from './components/Content';
import { products } from './data/products.ts';
import { IProduct } from './types.ts';

function App() {
  PageViews.trackPageView('Main page');

  const [seletedItems, setSeletedItems] = useState<Array<IProduct>>([]);

  const handleProductSelection = (selectedProduct: IProduct, value: boolean) => {
    if (value) {
      setSeletedItems((prev) => [...prev, selectedProduct]);
    } else {
      setSeletedItems((prev) => prev.filter((product) => product.id !== selectedProduct.id))
    }
  }

  // TODO add custom event tracking e.g.

  // CustomEvent.trackEvent('user_register_form', 'submit', 'Sent');

  return (
    <>
      <Header seletedItems={seletedItems}/>

      <Content products={products} handleProductSelection={handleProductSelection}/>
    </>
  )
}

export default App
