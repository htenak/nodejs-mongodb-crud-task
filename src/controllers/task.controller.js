const Task = require("../models/Task");

const renderTasks = async (req, res) => {
  const tasks = await Task.find();

  res.render("index", { tasks: tasks });
};

const createTask = async (req, res) => {
  try {
    const task = Task(req.body); //recibe los datos
    await task.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.render("edit", { task: task });
  } catch (err) {
    console.log(err.message);
  }
};

const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

module.exports = {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
};
