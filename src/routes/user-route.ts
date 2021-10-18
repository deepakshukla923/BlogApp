import { Router } from "express";
import validator from "../middleware/user-validation";
import Controller from "../controller/user-controller";

const controller = new Controller();
export const router: Router = Router();

router.post("/register", validator.registerValidation, controller.register);
router.post("/logIn", validator.logInValidation, controller.logIn);
