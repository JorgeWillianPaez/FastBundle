import { Container } from "./styles";
import RegisterForm from "../../Components/RegisterForm";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <RegisterForm />
      </Container>
    </motion.div>
  );
};

export default Register;