import { Grid2 } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ToyIcon } from "../../assets/ToyIcon";
import { ElectronicsIcon } from "../../assets/ElectronicsIcon";
import { FurnitureIcon } from "../../assets/FurnitureIcon";
import { HouseholdIcon } from "../../assets/HouseholdIcon";

interface IDashboardCard {
  name: string;
  label: string;
}

export const DashboardCard: React.FC<IDashboardCard> = ({ label, name }) => {
  const navigate = useNavigate();

  const StyledCard = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3em',
    padding: '2em',
    gap: '2em',
    height: 'calc(100% - 10em)',
    cursor: 'pointer',
    backgroundColor: '#e1c744',
    borderRadius: '0.5em',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
  }));

  const StyledLabel = styled('label')(() => ({
    fontSize: '2em',
    fontWeight: '500',
    cursor: 'pointer',
  }));

  const getIcon = () => {
    const iconProps = {
      height: '4em',
      width: '4em',
    };

    switch(name) {
      case 'toys': {
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

  return (
    <Grid2 size={6}>
      <StyledCard onClick={() => navigate(`/category/${name}`)}>
        <StyledLabel>{ label }</StyledLabel>

        { getIcon() }
      </StyledCard>
    </Grid2>
  );
}
