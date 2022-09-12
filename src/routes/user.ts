import { Router } from "express";
import { addUser, getUser, getUsers, updateUser } from "../controllers/user";

const userRoute = Router();

userRoute.post('/', addUser);
userRoute.get('/', getUsers);
userRoute.get('/:id',getUser);
userRoute.put('/:id',updateUser)

export { userRoute };