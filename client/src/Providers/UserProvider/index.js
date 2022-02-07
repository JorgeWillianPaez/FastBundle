import axios from "axios";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const navigate = useNavigate();

  const signUp = (userData) => {
    axios.post("http://localhost:3000/users", userData)
      .then((res) => {
        toast.success("Usuário cadastrado!");
        return navigate("/");
      })
      .catch((err) => {
        return toast.error(err.response.data.message);
      })
  }

  const handleLogin = (userData) => {
    axios.post("http://localhost:3000/users/login", userData)
      .then((res) => {
        toast.success("Usuário logado com sucesso!");
        return navigate("/dashboard");
      })
      .catch((err) => {
        return toast.error(err.response.data.message);
      });
  };

  return (
    <UserContext.Provider value={{ handleLogin, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);