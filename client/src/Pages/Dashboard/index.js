import { DashboardContainer, AsideNav, MainContent, Categories, Products, Product, DashboardContent } from "./styles";
import Header from "../../Components/Header";
import { motion } from "framer-motion";
import { useProduct } from "../../Providers/ProductsProvider";

const Dashboard = () => {

  const { products } = useProduct();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <DashboardContainer>
        <Header />
        <DashboardContent>
          <AsideNav>
            <input placeholder="Pesquisar..." />
            <Categories>
              <h3>Filtros</h3>
            </Categories>
          </AsideNav>
          <MainContent>
            {products.map((product) => (
              <div key={product.uuid}>Name</div>
            ))}
            {/* {products.length <= 0
              ?
              <h1>Cadastrar produto</h1>
              :
              products.map(product => <div key={product.uuid}>c</div>)
            } */}
          </MainContent>
        </DashboardContent>
      </DashboardContainer>
    </motion.div>
  )
}

export default Dashboard;