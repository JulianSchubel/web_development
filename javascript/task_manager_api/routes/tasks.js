const {
    getTasks, 
    getTask,
    createTask,
    updateTask,
    deleteTask,
    editTask
} = require("../controllers/tasks");

const express = require("express");
const router = express.Router();

router.route("/")
    .get(getTasks)
    .post(createTask);

router.route("/:id")
    .get(getTask)
    .put(editTask)
    .patch(updateTask)
    .delete(deleteTask);

module.exports = router
