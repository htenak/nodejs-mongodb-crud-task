const { Router } = require("express");

const {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} = require("../controllers/task.controller");

const router = Router();

router.get("/", renderTasks);

router.post("/task/add", createTask);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

router.get("/task/:id/toggleDone", taskToggleDone);

module.exports = router;
