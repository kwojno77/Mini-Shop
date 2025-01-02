export interface IProduct {
    id: number,
    price: number,
    name: string,
    type: ProductType
}

export interface Icon {
    height?: string;
    width?: string;
}

export type ProductType = 'household' | 'toy' | 'electronics' | 'furniture';