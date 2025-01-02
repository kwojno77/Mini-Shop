import { Grid2 } from "@mui/material";
import { PageWrapper } from "../../components/PageWrapper";
import { DashboardCard } from "./DashboardCard";
import { PageViews } from "@piwikpro/react-piwik-pro";

const cards = [
  {
    label: 'Toys',
    name: 'toys'
  },
  {
    label: 'Electronics',
    name: 'electronics'
  },
  {
    label: 'Household',
    name: 'household'
  },
  {
    label: 'Furniture',
    name: 'furniture'
  },
]

interface IDashboard {}

export const Dashboard: React.FC<IDashboard> = ({}) => {
  PageViews.trackPageView('Dashboard');

  return (
    <PageWrapper>
      <Grid2 container height="100%">
        { cards.map((card) =>
          <DashboardCard key={card.name} label={card.label} name={card.name}/>
        )}
      </Grid2>
    </PageWrapper>
  );
}
