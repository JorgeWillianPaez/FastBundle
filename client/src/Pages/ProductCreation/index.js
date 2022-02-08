import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProduct } from "../../Providers/ProductsProvider";
import Header from "../../Components/Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCreation = () => {

  const { createProduct } = useProduct();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    price: yup.string().required("Preço obrigatório"),
    condition: yup.string().required("Condição de uso obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data) => {
    createProduct(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Header />
        <form onSubmit={handleSubmit(onSubmitData)}>
          <h1>Cadastre seu produto através do formulário</h1>
          <Input placeholder="Nome" name="name" register={register} error={errors.name?.message} />
          <Input placeholder="Categoria" name="category" register={register} error={errors.category?.message} />
          <Input placeholder="Preço" name="price" register={register} error={errors.price?.message} />
          <Input placeholder="Condição" name="condition" register={register} error={errors.condition?.message} />
          <Button type="submit">CADASTRAR PRODUTO</Button>
        </form>
      </Container>
    </motion.div>
  )
}

export default ProductCreation;