import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../Services/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const createProduct = (data) => {
    api.post("/products", data)
      .then((res) => {
        setProducts([...products, res.data]);
        toast.success("Produto criado com sucesso!");
      })
      .catch((err) => {
        return toast.error(err.response.data.message)
      });
  };

  return (
    <ProductContext.Provider value={{ createProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);