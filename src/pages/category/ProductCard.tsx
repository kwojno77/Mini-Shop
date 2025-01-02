import { Grid2, styled } from "@mui/material";
import { IProduct } from "../../types.ts";
import { ToyIcon } from "../../assets/ToyIcon.tsx";
import { ElectronicsIcon } from "../../assets/ElectronicsIcon.tsx";
import { HouseholdIcon } from "../../assets/HouseholdIcon.tsx";
import { FurnitureIcon } from "../../assets/FurnitureIcon.tsx";
import { ShoppingCartIcon } from "../../assets/ShoppingCartIcon.tsx";
import { CustomEvent } from "@piwikpro/react-piwik-pro";

interface IProductCard {
  product: IProduct;
  idsOfProductsInCart: Array<number>;
  setIdsOfProductsInCart: React.Dispatch<React.SetStateAction<number[]>>;
}

export const ProductCard: React.FC<IProductCard> = ({ product, idsOfProductsInCart, setIdsOfProductsInCart }) => {
  const isSelected = idsOfProductsInCart.some((id) => id === product.id);

  const StyledCard = styled('div')<{ isSelected: boolean }>(({ isSelected }) => ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'left',
    margin: '1em',
    gap: '0.5em',
    height: 'calc(100% - 2em)',
    backgroundColor: '#e1c744',
    borderRadius: '0.5em',
    opacity: isSelected ? '0.4' : '1', 
  }));

  const StyledCardHeader = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'calc(100% - 4em)',
    padding: '2em',
    backgroundColor: '#efe6b7',
    borderRadius: '0.5em 0.5em 0 0',
  }));

  const StyledNameLabel = styled('label')(() => ({
    paddingLeft: '16px',
    fontSize: '1.25em',
  }));

  const StyledPriceLabel = styled('label')(() => ({
    paddingLeft: '16px',
    fontSize: '1.5em',
  }));

  const StyledCartButton = styled('button')(() => ({
    position: 'absolute',
    right: '1em',
    top: '1em',
    borderRadius: '50%',
  }));

  const getIcon = () => {
    const iconProps = {
      height: '8em',
      width: '8em',
    };

    switch(product.type) {
      case 'toy': {
        return <ToyIcon {...iconProps}/>;
      }
      case 'electronics': {
        return <ElectronicsIcon {...iconProps}/>;
      }
      case 'household': {
        return <HouseholdIcon {...iconProps}/>
      }
      case 'furniture': {
        return <FurnitureIcon {...iconProps}/>
      }
      default: {
        return <></>;
      }
    }
  }

  const formattedPrice = product.price.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <Grid2 size={4}>
      <StyledCard isSelected={isSelected}>
        <StyledCardHeader>
          { getIcon() }          
        </StyledCardHeader>

        <StyledNameLabel>{ product.name }</StyledNameLabel>
        
        <StyledPriceLabel>{ `${formattedPrice} zł` }</StyledPriceLabel>

        <StyledCartButton onClick={() => {
          if (isSelected) {
            CustomEvent.trackEvent(`category-${product.type}`, 'select', 'Select product');
            setIdsOfProductsInCart((prev) => prev.filter(id => id !== product.id));
          } else {
            CustomEvent.trackEvent(`category-${product.type}`, 'unselect', 'Unselect product');
            setIdsOfProductsInCart((prev) => [...prev, product.id]);
          }
        }}>
          <ShoppingCartIcon height="1.5em" width="1.5em"/>
        </StyledCartButton>
      </StyledCard>
    </Grid2>
  );
}
