import { Grid2 } from "@mui/material";
import { IProduct } from "../../types.ts";
import { ProductCard } from "./ProductCard.tsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.tsx";

interface IProductCards {
  products: Array<IProduct>;
}

export const ProductCards: React.FC<IProductCards> = ({ products }) => {
  const { value: idsOfProductsInCart, setValue: setIdsOfProductsInCart} = useLocalStorage<Array<number>>('productsInCart', []);

  return (
    <Grid2 container height="100%">
      { products.map((product) =>
        <ProductCard
          key={product.id}
          product={product}
          idsOfProductsInCart={idsOfProductsInCart}
          setIdsOfProductsInCart={setIdsOfProductsInCart}
        />
      )}
    </Grid2>
  );
}
