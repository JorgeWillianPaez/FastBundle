import { FormContainer } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useUser } from "../../Providers/UserProvider";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const { handleLogin } = useUser();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória").min(8, "Mínimo 8 caracteres!")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = async (data) => {
    await handleLogin(data);
    return navigate("/dashboard");
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <Input placeholder="Nome de usuário" name="username" register={register} error={errors.username?.message} />
        <Input placeholder="Senha" type="password" name="password" register={register} error={errors.password?.message} />
        <Button type="submit">ENTRAR</Button>
      </form>
      <p>Ainda não possui conta? Crie uma agora mesmo <Link to="/register" >aqui</Link>!</p>
    </FormContainer>
  )
};

export default LoginForm;