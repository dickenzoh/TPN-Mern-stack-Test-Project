import express from "express";
import {
  signIn,
  signUp,
  getUsers,
  updateUserRole,
  updateUserDetails,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

router.get("/", getUsers);
router.patch("/:id", updateUserRole);
router.patch("/:id", updateUserDetails);

export default router;
