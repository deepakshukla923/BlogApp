import { Router } from "express";
import validator from "../middleware/post-validation";
import controller from "../controller/post-controller";
import { auth } from "../middleware/auth"

export const router: Router = Router();

router.get("/", auth, controller.getPosts);
router.post("/", auth, validator.postValidation, controller.createPost);
router.get("/:id", auth, controller.getById);
router.put("/:id", auth, validator.updateValidation, controller.updatePost);
router.delete("/:id", auth, validator.deleteValidation, controller.deletePost);
