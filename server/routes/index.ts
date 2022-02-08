import { Router } from "express";

import CreateProductController from "../controllers/createProducts.controller";
import DeleteProductController from "../controllers/deleteProduct.controller";
import UpdateProductController from "../controllers/updateProduct.controller";
import CreateUserController from "../controllers/createUser.controller";
import LoginUserController from "../controllers/loginUser.controller";
import GetAllProductsController from "../controllers/getAllProducts.controller";

const router = Router();

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

router.post("/products", createProductController.handle);
router.get("/products", getAllProductsController.handle);
router.delete("/products/:uuid", deleteProductController.handle);
router.patch("/products/:uuid", updateProductController.handle);
router.post("/users", createUserController.handle);
router.post("/users/login", loginUserController.handle);

export default router;
