import { useMemo } from 'react';
import { ProductType } from '../types.ts';
import { products } from '../data/products.ts';

export const useProducts = (type: ProductType) => {
    return useMemo(() => {
        return products.filter((product) => product.type === type);
    }, [type]);
}
