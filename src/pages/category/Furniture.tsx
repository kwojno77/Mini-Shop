import { PageWrapper } from "../../components/PageWrapper";
import { PageTitle } from "../../components/PageTitle";
import { useProducts } from "../../hooks/useProducts";
import { ProductCards } from "./ProductCards";
import { PageViews } from "@piwikpro/react-piwik-pro";

export const Furniture: React.FC = ({}) => {
  PageViews.trackPageView('Furniture');

  const products = useProducts('furniture');
  
  return (
    <PageWrapper>
      <PageTitle title="Furniture"/>

      <ProductCards products={products}/>
    </PageWrapper>
  );
}
