import express from "express";
import { addTask } from "../controller/task.js";
const route = express.Router();

route.post("/task", addTask);
// route.get("/tasks", getTasks);
// route.put("task/:id", updateTask);

export default route;
