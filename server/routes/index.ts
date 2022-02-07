import { Router } from "express";
import { isLoggedIn } from "../middlewares/user.middleware";

import CreateProductController from "../controllers/createProducts.controller";
import DeleteProductController from "../controllers/deleteProduct.controller";
import UpdateProductController from "../controllers/updateProduct.controller";
import CreateUserController from "../controllers/createUser.controller";
import LoginUserController from "../controllers/loginUser.controller";

const router = Router();

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

router.post("/products", isLoggedIn, createProductController.handle);
router.delete("/products/:uuid", isLoggedIn, deleteProductController.handle);
router.patch("/products/:uuid", isLoggedIn, updateProductController.handle);
router.post("/users", createUserController.handle);
router.post("/users/login", loginUserController.handle);

export default router;
