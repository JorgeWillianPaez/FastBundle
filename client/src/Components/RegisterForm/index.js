import { FormContainer } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../Providers/UserProvider";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {

  const { signUp } = useUser();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Formato de email inválido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória").min(8, "Mínimo 8 caracteres!")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data) => {
    signUp(data);
  };

  return (
    <FormContainer>
      <h1>Seja muito bem vindo(a)!</h1>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <Input placeholder="Nome de usuário" register={register} name="username" error={errors.username?.message} />
        <Input placeholder="Nome completo" register={register} name="name" error={errors.name?.message} />
        <Input placeholder="Email" register={register} name="email" error={errors.email?.message} />
        <Input placeholder="Senha" type="password" register={register} name="password" error={errors.password?.message} />
        <Button type="submit" >CRIAR CONTA</Button>
      </form>
      <p>Já possui conta? Faça seu login <Link to="/">aqui</Link>!</p>
    </FormContainer>
  )
};

export default RegisterForm;