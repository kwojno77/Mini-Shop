import { PageWrapper } from "../../components/PageWrapper";
import { PageTitle } from "../../components/PageTitle";
import { ProductCards } from "./ProductCards";
import { useProducts } from "../../hooks/useProducts";
import { PageViews } from "@piwikpro/react-piwik-pro";

export const Household: React.FC = ({}) => {
  PageViews.trackPageView('Household');

  const products = useProducts('household');
  
  return (
    <PageWrapper>
      <PageTitle title="Household"/>

      <ProductCards products={products}/>
    </PageWrapper>
  );
}
