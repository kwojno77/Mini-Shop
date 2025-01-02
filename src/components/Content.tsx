import { Box } from '@mui/material';
import { IProduct } from '../types.ts';

interface IContent {
  products: Array<IProduct>;
  handleProductSelection: (product: IProduct, value: boolean) => void;
}

export const Content: React.FC<IContent> = ({ products, handleProductSelection }) => {
  return (
    <Box component="table" width="100%">
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        { products.map((product) => (
          <tr key={product.id}>
            <td>
              <input type="checkbox" onChange={(event) => {
                handleProductSelection(product, event.target.value === "on")
              }
            }></input>
            </td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.type}</td>
          </tr>
        ))}
      </tbody>
    </Box>
  );
}
