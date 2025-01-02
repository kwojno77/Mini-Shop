import { PageViews } from "@piwikpro/react-piwik-pro";
import { PageTitle } from "../../components/PageTitle";
import { PageWrapper } from "../../components/PageWrapper";

export const Cart: React.FC = ({}) => {
  PageViews.trackPageView('Cart');

  return (
    <PageWrapper>
      <PageTitle title="Cart"/>
    </PageWrapper>
  );
}
