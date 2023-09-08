import express from "express";
import { addTask, getTask, updateTask } from "../controller/task.js";
const route = express.Router();

route.post("/task", addTask);
route.get("/tasks", getTask);
route.put("/task/:id", updateTask);

export default route;
