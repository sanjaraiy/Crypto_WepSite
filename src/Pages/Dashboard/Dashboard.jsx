import DashboardLayout from "../../components/DashboardLayout"
import PorfolioSection from "./components/PorfolioSection"




function Dashboard() {
  return (
      <DashboardLayout title="Dashboard">
         <PorfolioSection></PorfolioSection>
      </DashboardLayout>
  )
}

export default Dashboard