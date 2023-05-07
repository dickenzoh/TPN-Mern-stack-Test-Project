import express from "express";
import { signIn, signUp, getUsers } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

router.get("/users", getUsers);

export default router;
