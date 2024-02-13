import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PorfolioSection from "./components/PorfolioSection";
import PriceSection from "./components/PriceSection";

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base:"repeat(1,1fr)",
          md:"repeat(2,1fr)",
        }} 
      
      
      >
        <GridItem colSpan={2}>
          <PorfolioSection></PorfolioSection>
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection></PriceSection>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
