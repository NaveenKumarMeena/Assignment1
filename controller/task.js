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
  const taskId = req.params.id;
  const newStatus = req.body.status;

  Task.findByIdAndUpdate(taskId, { status: newStatus }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};
