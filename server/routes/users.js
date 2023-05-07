import express from "express";
import {
  signIn,
  signUp,
  getUsers,
  updateUserRole,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

router.get("/", getUsers);
router.patch("/:id", updateUserRole);
router.patch("/users/:id/updateRole", updateUserRole);

export default router;
