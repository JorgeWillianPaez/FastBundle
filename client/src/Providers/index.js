import { UserProvider } from "./UserProvider";
import { ProductProvider } from "./ProductsProvider";

export const Providers = ({ children }) => {
  return (
    <>
      <ProductProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </ProductProvider>
    </>
  )
};

