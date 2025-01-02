import { PageViews, CustomEvent } from "@piwikpro/react-piwik-pro";
import { PageTitle } from "../../components/PageTitle";
import { PageWrapper } from "../../components/PageWrapper";
import { ProductList } from "./ProductList";
import { useProducts } from "../../hooks/useProducts";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMemo } from "react";

export const Cart: React.FC = ({}) => {
  PageViews.trackPageView('Cart');

  const products = useProducts();
  const { value: idsOfProductsInCart, setValue: setIdsOfProductsInCart} = useLocalStorage<Array<number>>('productsInCart', []);

  const productsInCart = useMemo(() => {
    return products.filter((product) => idsOfProductsInCart.includes(product.id));
  }, [products, idsOfProductsInCart]);

  const deleteProduct = (idToDelete: number) => {
    CustomEvent.trackEvent('cart', 'delete', 'Delete product from cart');

    setIdsOfProductsInCart((prev) => prev.filter((id) => id !== idToDelete));
  }

  return (
    <PageWrapper>
      <PageTitle title="Cart"/>

      <ProductList products={productsInCart} deleteProduct={deleteProduct}/>
    </PageWrapper>
  );
}
