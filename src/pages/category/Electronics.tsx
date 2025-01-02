import { PageWrapper } from "../../components/PageWrapper";
import { PageTitle } from "../../components/PageTitle";
import { ProductCards } from "./ProductCards";
import { useProducts } from "../../hooks/useProducts";
import { PageViews } from "@piwikpro/react-piwik-pro";

export const Electronics: React.FC = ({}) => {
  PageViews.trackPageView('Electronics');

  const products = useProducts('electronics');
  
  return (
    <PageWrapper>
      <PageTitle title="Electronics"/>

      <ProductCards products={products}/>
    </PageWrapper>
  );
}
