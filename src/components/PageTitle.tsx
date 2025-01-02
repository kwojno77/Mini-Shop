import { Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { LeftArrowIcon } from "../assets/LeftArrowIcon";

interface IPageTitle {
  title: string;
}

export const PageTitle: React.FC<IPageTitle> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" gap="1em">
      <button onClick={() => { navigate('/') }}>
        <LeftArrowIcon height="1.5em" width="1.5em"/>
      </button>
    
      <h2>{ title }</h2>
    </Stack>
  );
}
