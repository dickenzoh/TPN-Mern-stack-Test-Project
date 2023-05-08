import express from "express";
import {
  signIn,
  signUp,
  getUsers,
  updateUserRole,
  updateUserDetails,
} from "../controllers/user.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

router.get("/", auth, getUsers);
router.patch("/:id", auth, updateUserRole);
router.patch("/:id", auth, updateUserDetails);

export default router;
