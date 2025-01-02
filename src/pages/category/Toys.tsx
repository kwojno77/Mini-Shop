import { PageWrapper } from "../../components/PageWrapper.tsx";
import { PageTitle } from "../../components/PageTitle.tsx";
import { useProducts } from "../../hooks/useProducts.tsx";
import { ProductCards } from "./ProductCards.tsx";
import { PageViews } from "@piwikpro/react-piwik-pro";

export const Toys: React.FC = ({}) => {
  PageViews.trackPageView('Toys');

  const products = useProducts('toy');

  return (
    <PageWrapper>
      <PageTitle title="Toys"/>

      <ProductCards products={products}/>
    </PageWrapper>
  );
}
