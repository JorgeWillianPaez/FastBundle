import { Container } from "./styles";
import LoginForm from "../../Components/LoginForm";
import { motion } from "framer-motion";

const Login = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <LoginForm />
      </Container>
    </motion.div>
  )
}

export default Login;