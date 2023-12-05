const router = express.Router();
const express = require('express');
const TaskService = require('./tasks.service');


router.get('/:userId/tasks', getTasksByUser);
router.put('/:taskId/done', changeTaskStatus);
router.put('/:taskId/done', changeTaskName);
router.delete('/:taskId/delete', deleteTask);




function getTasksByUser(req, res, next) {
    TaskService.getTasksByUser(req.params)
    .then(tasks => {res.json(tasks)})
    .catch(next);
}

function deleteTask(req, res, next) {
    TaskService.deleteTask(req.params)
    .then(console.log(res))
    .catch(next);
}

function changeTaskName(req, res, next) {
    TaskService.changeTaskName(req.params)
    .then(console.log(res))
    .catch(next);
}

function changeTaskStatus(req, res, next) {
    TaskService.changeTaskStatus(req.params)
    .then(console.log(res))
    .catch(next);
}