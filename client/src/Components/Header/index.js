import { HeaderContainer, CompanyName, NavBar, Icons } from "./styles";
import settingsIcon from "../../Assets/settingsIcon.png";
import logoutIcon from "../../Assets/logoutIcon.png";
import { useUser } from "../../Providers/UserProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const { handleLogout } = useUser();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <CompanyName>
        <h1>Fast</h1>
        <h1>Bundle</h1>
      </CompanyName>
      <NavBar>
        <button onClick={() => navigate("/dashboard")}><h2>Todos os produtos</h2></button>
        <button onClick={() => navigate("/product-creation")}><h2>Venda seu produto</h2></button>
        <button><h2>Trabalhe conosco</h2></button>
      </NavBar>
      <Icons>
        <button><img src={settingsIcon} alt="Settings Icon" /></button>
        <button onClick={handleLogout}><img src={logoutIcon} alt="Logout Icon" /></button>
      </Icons>
    </HeaderContainer>
  )
}

export default Header;