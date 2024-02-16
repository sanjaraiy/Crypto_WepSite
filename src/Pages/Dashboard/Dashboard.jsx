import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PorfolioSection from "./components/PorfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          md:"repeat(1,1fr)",
          lg:"repeat(2,1fr)",
        }} 
      
        gridGap="10px"
      >
        <GridItem colSpan={{
          base:1,
          lg:2,
        }}>
          <PorfolioSection></PorfolioSection>
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection></PriceSection>
        </GridItem>
        <GridItem colSpan={1}>
           <Transactions></Transactions>
        </GridItem>
        <GridItem colSpan={1}>
            <InfoCard 
             imgUrl="/Image/dot.svg" 
             text="Learn more about Loans ~ Keep your Bitcoin, access it's value without selling it."
             tagText="Loan"
            ></InfoCard>
        </GridItem>
        <GridItem colSpan={1}>
            <InfoCard 
             inverted={true}
            tagText="Contact"
             imgUrl="/Image/square.svg"
             text="Learn more about our real estate, mortgage, and corporate account services"
            ></InfoCard>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
