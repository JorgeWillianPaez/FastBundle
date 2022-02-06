import { HeaderContainer, CompanyName, NavBar, Icons } from "./styles";
import settingsIcon from "../../Assets/settingsIcon.png";
import logoutIcon from "../../Assets/logoutIcon.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {

  const navigate = useNavigate();

  const logout = () => {
    toast.success("Sessão encerrada!")
    return navigate("/");
  };

  return (
    <HeaderContainer>
      <CompanyName>
        <h1>Fast</h1>
        <h1>Bundle</h1>
      </CompanyName>
      <NavBar>
        <h2>Sobre nós</h2>
        <h2>Trabalhe conosco</h2>
        <h2>Venda seu produto</h2>
      </NavBar>
      <Icons>
        <button><img src={settingsIcon} alt="Settings Icon" /></button>
        <button onClick={logout}><img src={logoutIcon} alt="Logout Icon" /></button>
      </Icons>
    </HeaderContainer>
  )
}

export default Header;