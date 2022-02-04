import { FormContainer } from "../RegisterForm/styles";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <FormContainer>
      <h1>Login</h1>
      <Input placeholder="Nome de usuário" />
      <Input placeholder="Senha" type="password" />
      <Button>ENTRAR</Button>
      <p>Ainda não possui conta? Crie uma agora mesmo <Link to="/register" >aqui</Link>!</p>
    </FormContainer>
  )
};

export default LoginForm;