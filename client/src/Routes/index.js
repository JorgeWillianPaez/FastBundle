import { Routes as ReactRoutes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ProductCreation from "../Pages/ProductCreation";
import Profile from "../Pages/Profile";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/product-creation" element={<ProductCreation />} />
      <Route exact path="/profile" element={<Profile />} />
    </ReactRoutes>
  );
};

export default Routes;