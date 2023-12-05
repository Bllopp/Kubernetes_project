const express = require('express');
const router = express.Router();
const TaskService = require('./tasks.service');

module.exports = router;


router.get('/:userId/tasks', getTasksByUser);
router.put('/:taskId/status/:newStatus', changeTaskStatus);
router.put('/:taskId/rename', changeTaskName);
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