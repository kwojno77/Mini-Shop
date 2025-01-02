import { styled } from "@mui/material";
import { useNavigate } from "react-router";
import { ShoppingCartIcon } from "../assets/ShoppingCartIcon";

export const Navigation: React.FC = ({}) => {

  const navigate = useNavigate();

  const StyledWrapper = styled('div')(() => ({
    backgroundColor: '#d7c87c',
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: "1em",
  }));
  
  return (
    <StyledWrapper>
      <h1>Mini shop</h1>

      <button onClick={() => navigate('/cart')}>
        <ShoppingCartIcon
          height="2em"
          width="2em"
        />
      </button>
    </StyledWrapper>
  );
}
