import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../Services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const signUp = (userData) => {
    api.post("/users", userData)
      .then((res) => {
        toast.success("Usuário cadastrado!");
        return navigate("/");
      })
      .catch((err) => {
        return toast.error(err.response.data.message);
      })
  }

  const handleLogin = async (userData) => {
    api.post("/users/login", userData)
      .then((res) => {
        localStorage.setItem("@FastBundle:token", res.data.message);
      })
      .then((_) => toast.success("Usuário logado com sucesso!"))
      .catch((err) => {
        return toast.error(err.response.data.message);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("@FastBundle:token");
    toast.success("Sessão encerrada!");
    return navigate("/");
  }

  return (
    <UserContext.Provider value={{ handleLogin, signUp, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);