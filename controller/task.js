import Task from "../model/task.js";

export const addTask = async (request, response) => {
  try {
    const newTask = new Task(request.body);
    await newTask.save();
    return response.status(200).json(newTask);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
export const getTask = async (request, response) => {
  try {
    const tasks = await Task.find({});
    return response.status(200).json(tasks);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
export const updateTask = async (request, response) => {
  try {
    const taskId = request.params.id;
    const newStatus = request.body.status;

    const tt = await Task.updateOne({ _id: taskId }, { status: newStatus });
    return response.status(200).json(tt);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
