export interface IProduct {
    id: number,
    price: number,
    name: string,
    type: 'household' | 'stationery' | 'toy' | 'electronics' | 'furniture'
}
