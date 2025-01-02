import { Box, styled } from '@mui/material';
import { IProduct } from '../../types.ts';
import { DeleteIcon } from '../../assets/DeleteIcon.tsx';
import { CSSProperties } from 'react';

interface IContent {
  products: Array<IProduct>;
  deleteProduct: (id: number) => void;
}

export const ProductList: React.FC<IContent> = ({ products, deleteProduct }) => {
  const StyledTable = styled('table')(() => ({
    width: "100%",
    backgroundColor: '#fff3b6',
    marginTop: '1em',
  }));

  const StyledTHead = styled('thead')(() => ({
    backgroundColor: '#e1c744'
  }));

  const StyledRow = styled('tr')(() => ({
    '&:hover': {
      backgroundColor: '#e9db94',
    },
  }));

  const StyledTH = styled('th')(() => ({
    textAlign: 'left',
    paddingLeft: '0.5em',
  }));

  const StyledTD = styled('td')<{ textAlign?: CSSProperties['textAlign'] }>(({ textAlign }) => ({
    textAlign: textAlign ?? 'left',
    paddingLeft: '0.5em',
  }));

  return (
    <StyledTable>
      <StyledTHead>
        <tr>
          <StyledTH>ID</StyledTH>
          <StyledTH>Name</StyledTH>
          <StyledTH>Price</StyledTH>
          <StyledTH>Type</StyledTH>
          <StyledTH></StyledTH>
        </tr>
      </StyledTHead>
      <tbody>
        { products.map((product) => (
          <StyledRow key={product.id}>
            <StyledTD>{product.id}</StyledTD>
            <StyledTD>{product.name}</StyledTD>
            <StyledTD>{product.price}</StyledTD>
            <StyledTD>{product.type}</StyledTD>
            <StyledTD textAlign='center'>
              <Box component='button' padding="0.5em 0.5em 0.25em" onClick={() => deleteProduct(product.id)}>
                <DeleteIcon height='1.25em' width='1.25em'/>
              </Box>
            </StyledTD>
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
}
