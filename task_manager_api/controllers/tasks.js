const asyncWrapper = require("../middleware/async_wrapper");
const Task = require('../models/task');
const { createCustomError } = require("../errors/custom-error");

const getTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({tasks});
});

const getTask = asyncWrapper(async (req, res, next) => {
    // use taskId as an alias for id parameter
    const {id:taskId} = req.params;
    const task = await Task.findOne({_id:taskId});
    if(!task) {
        return next(createCustomError(`No task with id: ${taskId} was found`, 404));
    }
    return res.status(200).json({task});
});

const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body);
        res.status(201).json({task});
});

const updateTask = asyncWrapper(async (req, res, next) => {
    const {id:taskId} = req.params;
    const options = {
        // always return the new, updated item
        new: true,
        // run validators on the update value
        runValidators: true,
    };
    const task = await Task.findOneAndUpdate({_id:taskId}, req.body, options);
    if(!task) {
        return next(createCustomError(`No task with id: ${taskId} was found`, 404));
    }
    res.status(200).json({task});
});

const editTask = asyncWrapper(async (req, res, next) => {
    const {id:taskId} = req.params;
    const options = {
        // always return the new, updated item
        new: true,
        // run validators on the update value
        runValidators: true,
        // overwrite object with only the provided fields 
        overwrite: true
    };
    const task = await Task.findOneAndUpdate({_id:taskId}, req.body, options);
    if(!task) {
        return next(createCustomError(`No task with id: ${taskId} was found`, 404));
    }
    res.status(200).json({task});
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const {id:taskId} = req.params;
    const task = await Task.findOneAndDelete({_id:taskId});
    if(!task) {
        return next(createCustomError(`No task with id: ${taskId} was found`, 404));
    }
    return res.status(200).json({task});
});

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    editTask,
    deleteTask
}
