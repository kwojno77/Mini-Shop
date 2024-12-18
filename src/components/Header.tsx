import { Stack } from "@mui/material";
import { IProduct } from "../types";

interface IHeader {
  seletedItems: Array<IProduct>;
}

export const Header: React.FC<IHeader> = ({seletedItems}) => {

  const fullPrice = seletedItems.reduce((prev, product) => prev + product.price, 0);

  return <Stack component="header">
    {/* Full price */}
    { 'Full price' + fullPrice }
  </Stack>;
}
