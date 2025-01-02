import { Stack, styled } from "@mui/material";
import { Navigation } from "./Navigation";
import { ReactNode } from "react";

interface IPageWrapper {
  children: ReactNode;
}

export const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  const ChildrenWrapper = styled('div')(() => ({
    backgroundColor: '#fffae0',
    padding: "1em",
    flexGrow: 1,
  }));

  return (
    <Stack direction="column" height="100%">
        <Navigation/>

        <ChildrenWrapper>
          { children }
        </ChildrenWrapper>
    </Stack>
  );
}
