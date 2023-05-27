import express from "express";
import {
  createUser,
  getUser,
  UpdateUser,
  findOneUser,
} from "./userController2";

const router = express.Router();

router.post("/create_user", createUser);
router.get("/", getUser);
router.get("/findOneUser/:id", findOneUser);
router.put("/updateUser", UpdateUser);


export default router;
