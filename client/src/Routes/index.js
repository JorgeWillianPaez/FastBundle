import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;