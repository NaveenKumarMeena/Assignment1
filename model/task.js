import mongoose from "mongoose";

const Task = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String, enum: ["complete", "pending", "ongoing"] },
});
const task = mongoose.model("task", Task);
export default task;
