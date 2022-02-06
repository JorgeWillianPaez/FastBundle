import { DashboardContainer, AsideNav, MainContent, Categories } from "./styles";
import Header from "../../Components/Header";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <AsideNav>
        <input placeholder="Pesquisar..." />
        <Categories>

        </Categories>
      </AsideNav>
      <MainContent>

      </MainContent>
    </DashboardContainer>
  )
}

export default Dashboard;