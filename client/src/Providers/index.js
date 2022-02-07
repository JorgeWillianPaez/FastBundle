import { UserProvider } from "./UserProvider";

export const Providers = ({ children }) => {
  return (
    <>
      <UserProvider>
        {children}
      </UserProvider>
    </>
  )
};

