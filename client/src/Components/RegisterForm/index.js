import { FormContainer } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <FormContainer>
      <h1>Seja muito bem vindo(a)!</h1>
      <Input placeholder="Nome de usuário" />
      <Input placeholder="Nome completo" />
      <Input placeholder="Email" />
      <Input placeholder="Senha" type="password" />
      <Input placeholder="Confirme sua senha" type="password" />
      <Button>CRIAR CONTA</Button>
      <p>Já possui conta? Faça seu login <Link to="/">aqui</Link>!</p>
    </FormContainer>
  )
};

export default RegisterForm;